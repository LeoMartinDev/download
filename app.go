package main

import (
	"bufio"
	"context"
	"fmt"
	"io"
	"os/exec"
)

// App struct
type App struct {
	ctx       context.Context
	aria2cCmd *exec.Cmd
}

func startAria2c() *exec.Cmd {
	path, err := exec.LookPath("./build/vendors/linux/aria2c")

	if err != nil {
		panic(err)
	}

	reader, writer := io.Pipe()

	_, cmdDone := context.WithCancel(context.Background())

	go func() {
		scanner := bufio.NewScanner(reader)
		for scanner.Scan() {
			fmt.Println(scanner.Text())
		}
	}()

	aria2c := exec.Command(path,
		"--enable-rpc",
		"--rpc-listen-all",
		"--rpc-allow-origin-all",
		"--rpc-listen-port=6800",
	)
	aria2c.Stdout = writer
	err = aria2c.Start()

	if err != nil {
		return nil
	}

	go func() {
		_ = aria2c.Wait()
		cmdDone()
		writer.Close()
	}()

	return aria2c
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	aria2cCmd := startAria2c()

	if aria2cCmd == nil {
		panic("failed to start aria2c")
	}

	a.aria2cCmd = aria2cCmd

	a.ctx = ctx
}

// shutdown is called when the app is closing
func (a *App) beforeClose(ctx context.Context) bool {
	if err := a.aria2cCmd.Process.Kill(); err != nil {
		fmt.Println("failed to kill aria2c:", err)
	}

	return true
}

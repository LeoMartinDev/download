import { createContext, useState, useContext, useEffect } from "react";
import Aria2 from "aria2-lib";

export const Aria2Context = createContext();

export const useSomeContext = () => useContext(aria2Context);

export const Aria2Provider = ({ children }) => {
  const [state, setState] = useState({
    aria2: null,
    error: null,
  });

  useEffect(() => {
    const initializeAria2 = async () => {
      try {
        const aria2 = new Aria2({
          WebSocket: window.WebSocket,
          fetch: window.fetch,
          port: 6800,
        });

        await aria2.open();

        setState({ aria2 });
      } catch (error) {
        console.error(error);
        setState({ error });
      }
    };

    initializeAria2();

    return () => {
      if (state.aria2) {
        state.aria2.close();
      }
    };
  }, []);

  return (
    <Aria2Context.Provider value={{ aria2: state.aria2, error: state.error }}>
      {children}
    </Aria2Context.Provider>
  );
};

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex">
      <nav className="w-14 h-full bg-red-500"></nav>

      <main className="flex-1 h-full bg-blue-400 overflow-y-auto px-6 pt-4">
        <Outlet />
      </main>
    </div>
  );
}

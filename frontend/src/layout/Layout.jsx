import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Layout({ navigationItems }) {
  return (
    <div className="w-screen h-screen flex">
        <Navigation className="w-14 h-full bg-red-500" items={navigationItems} />

        <main className="flex-1 h-full bg-blue-400 overflow-y-auto px-6 pt-4">
            <Outlet />
        </main>
    </div>
  );
}

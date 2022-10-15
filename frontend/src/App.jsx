import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Aria2Provider } from "./Aria2Provider.jsx";
import Layout from "./layout/Layout.jsx";
import { routes, navigationItems } from "./routes.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout navigationItems={navigationItems} />,
      children: routes,
    },
  ]);

  return (
    <Aria2Provider>
      <RouterProvider router={router} />
    </Aria2Provider>
  );
}

export default App;

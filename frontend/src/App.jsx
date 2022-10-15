import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Aria2Provider } from "./Aria2Provider.jsx";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <Aria2Provider>
      <RouterProvider router={router} />
      {/* <MemoryRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </MemoryRouter> */}
    </Aria2Provider>
  );
}

export default App;

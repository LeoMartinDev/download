import { MemoryRouter, Routes, Route } from "react-router-dom";

import { Aria2Provider } from "./Aria2Provider.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Aria2Provider>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    </Aria2Provider>
  );
}

export default App;

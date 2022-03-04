import { Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// Switch changes to Routes
// There is element attribute for rendering the required components
// You can use path as path="/products/*" to match only starting URL and not the exact
/* 
 No exact attribute required in v-6 as exact match happed autmatically. React Router version 6 now also has a better algorithm 
 for picking the best route to be loaded for a given path. 
 So the order of routes doesn't matter anymore when working with React Router version 6.
 */

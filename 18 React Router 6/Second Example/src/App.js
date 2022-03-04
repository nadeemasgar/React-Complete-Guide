import { Route, Routes, Navigate } from "react-router-dom";

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
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            {/* Defining Nested Routes */}
            <Route path="new-user" element={<p>Welcome, new user!</p>}></Route>
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// Navigate component is the replacement of Redirect component
// element={<Navigate to="/welcome" />}  => It will push a navigation to this page onto the navigation stack.
/* element={<Navigate replace to="/welcome" />}  => If we truly want to redirect, so replace the current page with the new page,
   then we would have to add the replace prop to Navigate as well.
*/

/*  You can also go for the Outlet approach to display all your routes defined in one central place, */

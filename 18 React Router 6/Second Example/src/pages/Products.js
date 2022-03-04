import { Link, useNavigate } from "react-router-dom";

const Products = () => {
 /*  
    const navigate = useNavigate();
    navigate("/welcome"); // To navigate programatically
    navigate("/welcome", { replace: true }); // will replace the current route with the new one ( will redirect instead of pushing the new route)
    navigate(-1); // To go back to previous page
    navigate(-2); // To go to the page before the previous page
    navigate(1); // To go forward
  */

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;

/* 
  Imperative Navigation
  With version 6, useHistory doesn't exist anymore which is used to navigate on certain action.
  Instead now, we have a useNavigate hook.
  with this navigate function.
  You simply pass numbers to it that tell React Router by how many pages you wanna go forward or backward.
*/

/* 
  In version 5, Prompt is used to prevent accidentally leaving a page if you have unsaved changes.
  With React version 6, Prompt component does not exist. So if you wanna prevent navigation in case of unsaved changes,
  you have to implement your own workaround for the moment.
*/

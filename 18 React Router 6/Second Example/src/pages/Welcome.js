import { Routes, Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="new-user" element={<p>Welcome, new user!</p>} />
      </Routes>
    </section>
  );
};

export default Welcome;

/* 
  Nested routes can be useful because they allow you to build deeply nested page structures

  We don't have to wrap the Route definition components with the Routes or Switch component.
  With version 6, it is mandatory to wrap using Routes.
*/

// The paths of these nested routes actually are relative to the path of the parent route.

/* 
  With version 6, since this is a link inside a component that already is loaded through a route, should have relative path.
  So links and routes are relative if they are loaded inside of a component that is already loaded because of another route.
  So if you're in a nested route, so to say.
          <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
          <Link  to={`${match.path}/comments`}><Comments /></Link>
  So, full path not needed in v-6. Instead use relative path
*/

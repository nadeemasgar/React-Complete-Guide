import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;

/* 
    <Route path="/quotes/:quoteId/comments"> // Another way of adding Dynamic Path
        <Comments />
    </Route>
*/

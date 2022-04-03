import React, { useEffect } from "react";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { useSelector, useDispatch } from "react-redux";

import { fetchQuotes } from "../../redux/quotesSlice";

const Quotes = () => {
  const quote = useSelector(state => state.quotes.items);
  const status = useSelector(state => state.quotes.status);
  const error = useSelector(state => state.quotes.error);

  console.log(quote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  if (error) return <Error message={error} />;
  if (status === "loading") return <Loading />;

  return (
    <div>
      {quote.map(q => (
        <div key={q.quote_id}>{q.quote}</div>
      ))}
    </div>
  );
};

export default Quotes;

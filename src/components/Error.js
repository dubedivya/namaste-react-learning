import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error.data);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {error.status} {error.statusText}
      </h3>
    </div>
  );
}

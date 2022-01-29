import React, { useState } from "react";

import "./styles.scss";

export const App = () => {
  const [loading, setLoading] = useState(false);

  const onClickHandler = () => setLoading(!loading);

  return (
    <div className="container">
      <h5>
        This is some text and when you click
        <button onClick={onClickHandler}>here</button> you set loading to
        {loading ? " false" : " true"}
      </h5>
    </div>
  );
};

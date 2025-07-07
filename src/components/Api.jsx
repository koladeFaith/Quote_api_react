import React, { useState } from "react";
import style from "../css/Api.module.css";
import axios from "axios";
const Api = () => {
  const [info, setinfo] = useState();
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [restart, setRestart] = useState(false);
  const getQuote = () => {
    const url = "https://api.api-ninjas.com/v1/quotes";
    setLoader(true);
    setError(false);
    axios
      .get(url, {
        headers: {
          "X-Api-Key": "bucl5dLN5Th0YgUw1A02jA==iBBRH4Jkv8i3L684",
        },
      })
      .then((response) => {
        setinfo(response.data[0]);
        setLoader(false);
        setError(false);

        console.log(response.data);
      })
      .catch((error) => {
        setError(true);
        setinfo(undefined);
        setLoader(false);
        console.log(error);
      });
  };
  const restartBtn = () => {
    setRestart(true);
    window.location.reload();
  };
  return (
    <>
      <h1 className={style.quoteHeading}>Quote of the Day</h1>
      <div className={style.container}>
        <div className={style.quotebox} id="quote-box">
          <p className={style.quote}>
            {error
              ? "Oops! Something went wrong."
              : info?.quote
              ? `"${info.quote}"`
              : "Click the button to get a quote"}
          </p>
          <h3 className={style.author}>
            {error
              ? "— Oops! Something went wrong."
              : `—${info?.author ? info.author : "Unknown"}`}
          </h3>
          <div className={style.category} class="hidden">
            Category: <span> {info?.category ? info.category : "Unknown"}</span>
          </div>
        </div>
        <button
          onClick={getQuote}
          className={style.newquote}
          disabled={loader}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {loader ? (
            <div
              className="spinner-border text-light"
              role="status"
              style={{ width: "1.5rem", height: "1.5rem" }}>
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : info ? (
            "Next"
          ) : (
            "Get Quote"
          )}
        </button>

        <button
          onClick={restartBtn}
          className={style.restart}
          disabled={loader}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {restart ? (
            <div
              className="spinner-border text-light"
              role="status"
              style={{ width: "1.5rem", height: "1.5rem" }}>
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Restart"
          )}
        </button>
      </div>
    </>
  );
};

export default Api;

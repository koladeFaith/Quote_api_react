import React from 'react'
import style from '../css/Api.module.css'

const Api = () => {
  return (
    <>
        <h1 className={style.quoteHeading}>Quote of the Day</h1>
      <div className={style.container}>
        <div class={style.quotebox} id="quote-box">
          <p id="quote" className="hidden">
            Click the button to get a quote
          </p>
          <h3 id="author" className="hidden">
            — Unknown
          </h3>
        </div>
        <button id="new-quote">Get Quote</button>
      </div>
    </>
  );
}

export default Api
import React from 'react'
import style from '../css/Api.module.css'

const Api = () => {
    const [quote, setquote] = useState()
    const getQuote = () => {
        let url = 
    }
  return (
    <>
      <h1 className={style.quoteHeading}>Quote of the Day</h1>
      <div className={style.container}>
        <div class={style.quotebox} id="quote-box">
          <p className={style.quote}>Click the button to get a quote</p>
          <h3 className={style.author}>— Unknown</h3>
        </div>
        <button onClick={getQuote} className={style.newquote}>Get Quote</button>
      </div>
    </>
  );
}

export default Api
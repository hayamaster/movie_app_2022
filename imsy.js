import {useState, useEffect} from 'react';

// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Allow-Credentials', 'true'); 

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [curUnit, setCurUnit] = useState([])
  useEffect (() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json)
      })
    fetch("https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=JpUVb7Ei32XLxjdWFwO3K0yWzYAQeoLt&data=AP01")
    .then((response) => response.json())
    .then((json) => {
      setCurUnit(json);
      console.log(json)
    })
  }, [])
  // useEffect (() => {
  //   fetch("https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=JpUVb7Ei32XLxjdWFwO3K0yWzYAQeoLt&data=AP01",{
  //     method: 'no-cors',
  //     // headers: {
  //     //   'Accept': 'application/json',
  //     //   'Content-Type': 'application/json'
  //     // }
  //     })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setCurUnit(json);
  //       // setLoading(false);
  //       console.log(json)
  //     })
  //     console.log('sival')
  // }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong> 
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <select>
        {curUnit.map((coin) => (
          <option key={coin.cur_nm}>
            {coin.cur_unit}
          </option>
        ))}
      </select>
    </div>
  )
}

export default App;

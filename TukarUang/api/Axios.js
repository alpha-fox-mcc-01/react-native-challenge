import axios from 'axios'

export default axios.create({
  baseURL: 'https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'currency-converter5.p.rapidapi.com',
    'x-rapidapi-key': 'b25bad2616msh83fa370b5892ffep169f20jsne05b6fb262a7',
  },
})

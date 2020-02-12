import { useState, useEffect } from 'react'
import axios from '../api/Axios'

export default function useFetchRate(currencyCode, amount = 1) {
  const [responseData, setResponseData] = useState({ rates: {} })

  useEffect(() => {
    axios({
      method: 'get',
      params: {
        format: 'json',
        from: currencyCode.toUpperCase(),
        amount: amount,
      },
    }).then(({ data }) => {
      setResponseData(data)
    })
  }, [])

  return responseData
}

import { useEffect, useState } from 'react'
import axios from '../api/Axios'
export default function useInitialFetch() {
  const [responseData, setResponseData] = useState([])

  useEffect(() => {
    Promise.all([
      axios({
        method: 'get',
        params: {
          format: 'json',
          to: 'IDR',
          from: 'USD',
          amount: '1',
        },
      }),
      axios({
        method: 'get',
        params: {
          format: 'json',
          to: 'IDR',
          from: 'KRW',
          amount: '1',
        },
      }),
      axios({
        method: 'get',
        params: {
          format: 'json',
          to: 'IDR',
          from: 'JPY',
          amount: '1',
        },
      }),
      axios({
        method: 'get',
        params: {
          format: 'json',
          to: 'IDR',
          from: 'HKD',
          amount: '1',
        },
      }),
      axios({
        method: 'get',
        params: {
          format: 'json',
          to: 'IDR',
          from: 'EUR',
          amount: '1',
        },
      }),
      axios({
        method: 'get',
        params: {
          format: 'json',
          to: 'IDR',
          from: 'SGD',
          amount: '1',
        },
      }),
    ])
      .then((response) => {
        const cleanedData = []
        response.map((row) => {
          cleanedData.push(row.data)
        })

        setResponseData(cleanedData)
        // console.log(responseData)
      })
      .catch(console.log)
  }, [])
  return responseData
}

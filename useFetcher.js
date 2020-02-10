import React, { useEffect, useState } from 'react'
import instance from './helpers/axiosInstance'

export function useFetcher(endpoint) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    instance.get(endpoint)
            .then(({ data }) => {
              setCharacters(data.results)
            })
            .catch(err => {
              console.log(err)
              setError(err)
            })

  }, [])
  
  return { characters, loading, error }
    
}

export default useFetcher


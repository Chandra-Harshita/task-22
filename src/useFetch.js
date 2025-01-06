// useFetch.js
import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setloading] = useState(true)
  const [error, seterror] = useState(null)

  useEffect(() => {
    setloading(true)
    seterror(null)
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const res = await response.json()
        setData(res)
      } catch (err) {
        seterror(err.message)
      } finally {
        setloading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch

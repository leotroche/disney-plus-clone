import { useEffect, useState } from 'react'

export const useFetch = (service) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  const fetchData = async () => {
    try {
      const data = await service()
      setData(data)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, isLoading, error }
}

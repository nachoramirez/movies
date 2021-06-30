import { useEffect, useState } from 'react'
import axios from 'axios'

const useCallApi = (API, change) => {
  const [data, setData] = useState({})

  try {
    useEffect(async () => {
      const res = await axios.get(API)
      setData(res.data)
    }, [change])
  } catch (err) {
    setData(err)
  }

  return data
}

export default useCallApi

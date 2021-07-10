import { useEffect, useState } from 'react'
import axios from 'axios'

const useCallApi = (API, updater) => {
  const [data, setData] = useState({})

  try {
    useEffect(async () => {
      setData({})
      const res = await axios.get(API)
      setData(res.data)
    }, [updater])
  } catch (err) {
    setData(err)
  }

  return data
}

export default useCallApi

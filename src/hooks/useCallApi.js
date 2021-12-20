import { useEffect, useState } from 'react'
import axios from 'axios'

const useCallApi = ({ api = '', params = {}, updater = null }) => {
  const [data, setData] = useState({})

  try {
    useEffect(() => {
      const callApi = async () => {
        setData({})
        const res = await axios.get(api, { params })
        setData(res.data)
      }
      callApi()
    }, [updater])
  } catch (err) {
    setData(err)
  }

  return data
}

export default useCallApi

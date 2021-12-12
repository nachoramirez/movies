import { useEffect, useState } from "react";
import axios from "axios";

const useCallApi = ({ api = "", params = {}, updater = null }) => {
  const [data, setData] = useState({});

  try {
    useEffect(async () => {
      setData({});
      const res = await axios.get(api, { params });
      setData(res.data);
    }, [updater]);
  } catch (err) {
    setData(err);
  }

  return data;
};

export default useCallApi;

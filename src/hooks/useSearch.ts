import { useState } from 'react'
import spotify from '../lib/spotify';

const useSearch = () => {
  const [value, setValue] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  const onChange = (e: any) => {
    setValue(e.target.value);
  }

  const onSubmit = async () => {
    if(value) {
      try {
        setLoading(true);

        const result = await spotify.get(`/search?q=${value}&type=album,track,playlist,artist`);
        console.log(result.data)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }

  return {value, isLoading, onChange, onSubmit}
}

export default useSearch
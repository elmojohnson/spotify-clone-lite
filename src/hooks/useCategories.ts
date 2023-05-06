import { useEffect, useState } from 'react'
import spotify from '../lib/spotify';
import { Category } from '../../types';

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const [currentUrl, setCurrentUrl] = useState("/browse/categories?offset=0&limit=20");
  const [nextUrl, setNextUrl] = useState("");

  const getCategories = async () => {
    try {
      categories.length === 0 && setLoading(true);
      const result = await spotify.get(currentUrl);
      setCategories([...categories, ...result.data.categories.items]);
      setNextUrl(result.data.categories.next);
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  const handleLoadMore = () => setCurrentUrl(nextUrl);

  useEffect(() => {
    getCategories();
  }, [currentUrl])

  return {categories, isLoading, handleLoadMore, nextUrl}
}

export default useCategories
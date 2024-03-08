import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { POSTS_QUERY_KEY } from "@/reactQuery/keys/keys"
import Post from "@/types/post.dto"
import { apiUrl } from "@/utils/constants"

const usePosts = () => {
  const { data, isLoading, isError } = useQuery<Post[]>({
    queryKey: [POSTS_QUERY_KEY],
    queryFn: queryPosts,
    enabled: true
  })

  return {
    posts: data,
    isLoading,
    isError
  }
}

export const queryPosts = async () => {
  const { data } = await axios.get(`${apiUrl}/posts`)
  return data
}

export default usePosts

"use client"

import Post from "@/types/post.dto"
import usePosts from "@/hooks/usePosts"

const PostsList = () => {
  const { posts, isLoading, isError } = usePosts()

  if (isLoading) return <div>Loading posts...</div>
  if (isError) return <div>Error occured. Try again.</div>

  return (
    <ul>
      {posts?.map((post: Post, i: Number) => {
        return <li key={`${post.id}-${i}`}>{post.title}</li>
      })}
    </ul>
  )
}

export default PostsList

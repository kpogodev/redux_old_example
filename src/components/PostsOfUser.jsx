import React from 'react'
import { useSelector } from 'react-redux'

const PostsOfUser = () => {
    const { posts, loading } = useSelector((state) => state.posts.postsByUserId)
    return (
        <div>
            {!loading && posts.length > 0 ? (
                <>
                    <h1>Posts of user #{posts[0].userId}</h1>
                    {posts.map((post) => (
                        <div key={post.id}>{post.title}</div>
                    ))}
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}

export default PostsOfUser

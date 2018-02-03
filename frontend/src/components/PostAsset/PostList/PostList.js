import React from 'react'
import Post from '../Post/Post'

const PostList = ({ posts, filter }) => {

    let allPosts = (filter === 'all') ? posts : posts.filter(post => post.category === filter)

    const renderPostList = allPosts.map(post => <Post key={post.id} post={post} />)

    return (
      <ul className="list-group">
        {renderPostList}
      </ul>
    )
}

export default PostList
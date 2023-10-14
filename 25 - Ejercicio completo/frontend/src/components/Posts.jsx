import React from 'react'
import Post from './Post'

export default function Posts({posts}) {
  return (
    <div className='grid grid-cols-4 max-w-6xl mx-auto gap-x-5 gap-y-7'>
        {posts.map((post)=><Post key={post._id} post={post}/>)}
    </div>
  )
}

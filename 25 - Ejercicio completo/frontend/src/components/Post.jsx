import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({post}) {
  return (
    <article className='bg-white p-2 rounded-lg shadow-md'>
        <Link to={'/posts/'+post._id}><h3 className='text-3xl font-semibold'>{post.title}</h3></Link>
        <p className='text-lg text-orange-500 my-3'>{post.author.name}</p>
        <img src={post.image}></img>
    </article>
  )
}

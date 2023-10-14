import React, { useEffect, useState } from 'react'
import client from '../api/client'
import Posts from '../components/Posts'

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    client.get('/posts')
    .then((response)=>{
      setPosts(response.data.data)
    })
    .catch(console.log)
  })
  return (
    <div>
      <h1 className='text-3xl font-bold text-yellow-600 hover:text-pink-500 max-w-6xl mx-auto mb-5'>Todas las publicaciones</h1>
      <Posts posts={posts}/>
    </div>
  )
}

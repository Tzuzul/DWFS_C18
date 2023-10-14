import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import client from '../api/client'
import Comment from '../components/Comment'

export default function PostDetails() {
    const {id} = useParams()
    const [post, setPost] = useState({})
    useEffect(()=>{
        client.get('/posts/'+id)
        .then((response)=>{
            setPost(response.data.data)
        })
    })
  return (
    <div className='max-w-4xl mx-auto'>
        <h1 className='text-5xl font-bold mb-10'>{post.title}</h1>
        <p>{post.content}</p>
        <img src={post.image} alt={post.title} />
        <Comment commentaries={post.commentaries}></Comment>
        {/* {user.logged&&<form>
                
                </form>} */}
    </div>
  )
}

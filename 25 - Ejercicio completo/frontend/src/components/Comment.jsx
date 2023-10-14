import React from 'react'

export default function Comment({commentaries}) {
  return (
    <section className='mt-10'>
        <h3 className='text-3xl font-bold mb-5'>Comentarios</h3>
        <div className='space-y-5'>
            {commentaries?.map((comment)=>{
                return <div className='bg-white p-5 rounded-lg shadow-md'>
                    <p>{comment.author.name}</p>
                    <p>{comment.content}</p>
                </div>
            })}
            {commentaries?.length===0&&<p className='text-xl'>No hay comentarios que mostrar</p>}
        </div>
    </section>
  )
}

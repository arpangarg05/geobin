import React from 'react'
import service from '../appwrite/config'
import {Link} from 'react-router-dom'


function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link  to={`/post/${$id}`}>
      <div className="w-[300px] rounded-2xl border">
        <img src={service.getFilePreview(featuredImage)} alt={title} className="h-[200px] w-full rounded-t-md object-cover" />
          <div className="p-4 bg-slate-400 rounded-b-md">
            <h1 className="text-lg font-semibold ">{title}</h1>
        </div>
    </div>

    </Link>
  )
}


export default PostCard



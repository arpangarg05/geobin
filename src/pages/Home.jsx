import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const authStatus = useSelector((state) => state.auth.status)
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap mx-8">
                    {!authStatus ? (
                        <div className="p-2 w-full text-center">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                <button onClick={() => navigate("/login")}>Login to read posts</button>
                            </h1>
                        </div>
                    ) : (
                    posts.map((post) => (
                        <div key={post.$id} className='p-2'>
                            <PostCard {...post} />
                        </div>
                    )))}

                </div>
            </Container>
        </div>
    );
        
       
}

export default Home
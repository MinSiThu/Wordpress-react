import React from "react"
import NetworkCheck from '../components/NetworkCheck';
import Post from '../components/Post'
import { useSelector, useDispatch } from 'react-redux'
import IncreasePageCount from "../components/IncreasePageCount";

const Home = ()=>{

    const posts = useSelector(state=>state.posts.postArray)

    return <div>
        <NetworkCheck/>
        {   posts.map((post,index)=><Post key={post.title.rendered+index} post={post}/>)   }
        <IncreasePageCount/>
    </div>
}

export default Home;
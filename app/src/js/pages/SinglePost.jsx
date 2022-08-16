import React from "react";
import NetworkCheck from "../components/NetworkCheck";
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux"
import GoBackButton from "../components/GoBackButton";

const SinglePost = ()=>{

    let params = useParams();
    const posts = useSelector(state=>state.posts.postArray)

    function getPost(title){
        return posts.find((post)=>{
            return post.title.rendered==title
        })

    }

    const post = getPost(params.postTitle)

    return <div>
        <GoBackButton/>
        <NetworkCheck/>
        <h2>{params.postTitle}</h2>
        <article className="container" dangerouslySetInnerHTML={{__html:post.content.rendered}}>
        </article>
    </div>
}

export default SinglePost
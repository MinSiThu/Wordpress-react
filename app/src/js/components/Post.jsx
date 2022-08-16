import React from "react";
import {Link} from "react-router-dom";

const Post = ({post})=>{
    return <article className="post">
        <h1>{post.title.rendered}</h1>
        <img src={post.featured_media_src_url} alt="cover_image"/>
        <br/>
        <Link to={'/post/'+post.title.rendered}>Read More</Link>
    </article>
}

export default Post
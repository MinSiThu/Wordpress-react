import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {addPost,increasePageCount} from "../store/postSlice"

const IncreasePageCount = ()=>{

    const pageCount = useSelector(state=>state.posts.pageCount)
    const dispatch = useDispatch()

    function loadMore(){
        (async ()=>{
            let response = await fetch("https://css-tricks.com/wp-json/wp/v2/posts?per_page=3&page="+pageCount);
            let json = await response.json();
            dispatch(increasePageCount());
            dispatch(addPost(json))
        })()
    }

    return <div>
        <button className="loadmore" onClick={loadMore}>
            Load More
        </button>
    </div>
}

export default IncreasePageCount;
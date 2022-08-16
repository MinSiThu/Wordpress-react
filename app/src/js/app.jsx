import React from 'react';
import Home from './pages/Home';
import SinglePost from "./pages/SinglePost";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {addPost} from "./store/postSlice"
import Navbar from './components/Navbar';

const App = ()=>{

    const dispatch = useDispatch();

    React.useEffect(()=>{
        (async ()=>{
            let response = await fetch("https://css-tricks.com/wp-json/wp/v2/posts?per_page=3&page="+1);
            let json = await response.json();
            console.log(json);
            dispatch(addPost(json))
        })()
    },[])

    return <React.StrictMode>
            <Navbar></Navbar>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/post/:postTitle" element={<SinglePost/>} />
                </Routes>
            </BrowserRouter>
    </React.StrictMode>
}

export default App;
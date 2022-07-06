import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import React from "react";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import Blog from "./components/blog/Blog";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="/blogs" element={<BlogsPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>

                <Route path="/blogs/:id" element={<Blog/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;

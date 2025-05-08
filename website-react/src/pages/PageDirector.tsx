import { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router";
import './styling/PageDirector.css'
import Home from "./Home";
import Contact from "./Contact";
import Books from "./Books";
import Post from "./post/Post";
import BlogHome from "./BlogHome";

class PageDirector extends Component {
    render() {
        return (
            <div className='page-director-container'>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contacts" element={<Contact />} />
                        <Route path="/books" element={<Books />} />
                        <Route path="/api/*" element={null} />
                        <Route path="/blog" element={<BlogHome />} />
                        <Route path="/blog/*" element={<Post />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default PageDirector;
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

class PageDirector extends Component {
    render() {
        return (
            <div className='page-director-container'>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contacts" element={<Contact />} />
                        <Route path="/books" element={<Books />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default PageDirector;
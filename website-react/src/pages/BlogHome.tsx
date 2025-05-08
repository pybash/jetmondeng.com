import { Component, ReactNode } from "react";
import "./styling/Page.css"

class BlogHome extends Component {
    render(): ReactNode {
        return (
            <div className="postRoot">
                <div className="postContainer">
                    <h2 style={{ marginTop: "130px" }}>Blog</h2>
                    <p>Ye' hear?</p>
                </div>
            </div>
        )
    }
}

export default BlogHome;
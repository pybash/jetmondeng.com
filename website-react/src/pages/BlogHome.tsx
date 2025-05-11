import { Component, ReactNode } from "react";
import "./styling/Page.css"
import "./styling/specifics/BlogDirectory.css"
import { BlogPostPreview } from "../components/BlogPostPreview/BlogPostPreview";

class BlogHome extends Component {
    render(): ReactNode {
        return (
            <div className="postRoot">
                <div className="postContainer">
                    <h2 style={{ marginTop: "130px" }}>Blog</h2>
                    <p>Welcome to my personal blog! Here is where I do my updates and post projects I have done.</p>
                    <div className="blog-posts-container">
                        <BlogPostPreview />
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogHome;
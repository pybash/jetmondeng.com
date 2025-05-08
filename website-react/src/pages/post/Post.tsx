import { Component, PropsWithChildren, ReactNode } from "react";
import "../styling/Page.css"
import "../styling/specifics/Post.css"
import PostImage from "./PostImage";

class Post extends Component<{}, {}> {

    postID: number = parseInt(window.location.pathname.split("/")[2]);

    constructor(props: PropsWithChildren) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div className="postRoot">
                <div className="postContainer">
                    
                    <div className="postInfoContainer">
                        <h2 style={{ marginTop: "50px" }} className="postTitle">Post #{this.postID}</h2>
                        <p className="postDate">April 26, 2025</p>
                        <div className="postTypeBox">
                            <p className="postType release">// RELEASE!</p>
                        </div>
                    </div>


                    {
                        (
                            <div className="blog-contents"> 
                                <img src="https://github.com/ThatBoiLukas/amber/blob/main/images/ocean.png?raw=true" className="postBanner"/>
                                <p>...you heard that right!</p>
                                <p>This is my first blog, and my first post! This will be where I will making posts about what I am working on and more!</p>
                            </div>
                        )
                    }
                    <div className="blog-end-sep">
                        <h1 className="blog-end-title">END</h1>
                        <div className="end-seperator"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;
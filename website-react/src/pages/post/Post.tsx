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
                                <img src="/post_images/image.png" className="postBanner"/>
                                <h3>The grand release!</h3>   
                                <p>Welcome to my blog, where I will be posting live updates from my life!</p>
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
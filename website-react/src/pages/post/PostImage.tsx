import { Component, PropsWithChildren, ReactNode } from "react";
import "../styling/Page.css"
import "../styling/specifics/Post.css"

class PostImage extends Component<{imageURL: string, ysize?: number}, {}> {

    render(): ReactNode {
        return (
            <div style={
                {
                    width: "100%",
                    ...(this.props.ysize ? {height: this.props.ysize} : {height: "270px"})
                }
            }>
                <img src={this.props.imageURL} style={{
                    height: "100%",
                    width: "100%"
                }}/>
            </div>
        )
    }
}

export default PostImage;
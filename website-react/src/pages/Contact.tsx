import { Component, ReactNode } from "react";
import "./styling/Page.css"

class Contact extends Component {
    render(): ReactNode {
        return (
            <div className="postRoot">
                <div className="postContainer">
                    <h2 style={{ marginTop: "130px" }}>Contact</h2>
                    <p>My email is <a href="emailto:jetmondeng@gmail.com">jetmondeng@gmail.com</a></p>
                    <p>Currently, a form to fill out here is in the works!</p>
                </div>
            </div>
        )
    }
}

export default Contact;
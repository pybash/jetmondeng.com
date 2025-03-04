import { Component, PropsWithChildren, ReactNode } from "react";
import './NavBar.css'
import reactLogo from '../../react-native-logo-square.webp'
import linkedIn from "../../imgs/linkedin.png"

class NavBar extends Component {

    constructor(props: PropsWithChildren) {
        super(props);
    }

    render(): ReactNode {
        let pN = window.location.pathname
        return (
            <div className="nav-bar-container">
                <h2 className="myName">Jetmon Deng</h2>
                <a className={"button " + (pN == "/" ? "selected" : "")} href="/">🏡 Home</a>
                <a className={"button " + (pN == "/contacts" ? "selected" : "")} href="/contacts">✉️ Contact</a>
                <a className={"button " + (pN == "/books" ? "selected" : "")} href="/books">📚 Reads</a>
                <h3 className="subHeader">Projects</h3>
                <a className="button" href="https://github.com/pybash/PersonalWebsite"><img src={reactLogo} /> Personal Website</a>
                <h3 className="subHeader">Socials</h3>
                <a className="button" href="https://www.linkedin.com/in/jetmondeng/"><img src={linkedIn} /> LinkedIn</a>
            </div>
        )
    }
}

export default NavBar;
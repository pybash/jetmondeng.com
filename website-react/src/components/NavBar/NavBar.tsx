import { Component, PropsWithChildren, ReactNode } from "react";
import './NavBar.css'
import reactLogo from '../../react-native-logo-square.webp'
import linkedIn from "../../imgs/linkedin.png"
import holocapLogo from "../../imgs/handvr.svg"

const projects: {image: string, link: string, name: string}[] = [
    {
        image: holocapLogo,
        link: "https://github.com/pybash/HoloCap",
        name: "HoloCap"
    },
    {
        image: reactLogo,
        link: "https://github.com/pybash/jetmondeng.com",
        name: "Personal Website"
    }
]

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
                <a className={"button"} href="/Resume.pdf">📋 Resume</a>
                <h3 className="subHeader">Projects</h3>
                {
                    projects.map((elem,key) => (
                        <a className="button" href={elem.link} key={key}><img src={elem.image} /> {elem.name}</a>
                    ))
                }
                <h3 className="subHeader">Socials</h3>
                <a className="button" href="https://www.linkedin.com/in/jetmondeng/"><img src={linkedIn} /> LinkedIn</a>
            </div>
        )
    }
}

export default NavBar;
import { Component, PropsWithChildren, ReactNode } from "react";
import './NavBar.css'
import reactLogo from '../../react-native-logo-square.webp'
import linkedIn from "../../imgs/linkedin.png"
import holocapLogo from "../../imgs/handvr.svg"

const projects: { image: string, link: string, name: string }[] = [
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

class NavBar extends Component<{}, { enabledMobileDropdown: boolean }> {

    constructor(props: PropsWithChildren) {
        super(props);
        this.state = {
            "enabledMobileDropdown": false
        };
    }

    mobileDropDown = () => {
        this.setState(prevState => ({
            "enabledMobileDropdown": !prevState.enabledMobileDropdown
        }))
    }

    render(): ReactNode {
        let pN = window.location.pathname
        return (
            <div>
                <div className="mobile-nav-bar-container" style={(this.state.enabledMobileDropdown ? {
                    backgroundColor: "rgba(255, 255, 255, 0);",
                    backdropFilter: "blur(30px)",
                    height: "100vh"
                } : undefined)}> 
                    <div className="mobile-top">
                        <h2 className="myName mobileName">Jetmon Deng</h2>
                        <a onClick={this.mobileDropDown}>
                            <svg className="mobile-hamburger" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        </a>
                        
                    </div>
                    <a className={"button"} href="/">🏡 Home</a>
                    <a className={"button"} href="/contacts">✉️ Contact</a>
                    <a className={"button "} href="/books">📚 Reads</a>
                    <a className={"button"} href="/Resume.pdf">📋 Resume</a>
                    <h3 className="subHeader">Projects</h3>
                    {
                        projects.map((elem, key) => (
                            <a className="button" href={elem.link} key={key}><img src={elem.image} /> {elem.name}</a>
                        ))
                    }
                    <h3 className="subHeader">Socials</h3>
                    <a className="button" href="https://www.linkedin.com/in/jetmondeng/"><img src={linkedIn} /> LinkedIn</a>
                </div>
                <div className="nav-bar-container">
                    <h2 className="myName">Jetmon Deng</h2>
                    <a className={"button " + (pN == "/" ? "selected" : "")} href="/">🏡 Home</a>
                    <a className={"button " + (pN == "/contacts" ? "selected" : "")} href="/contacts">✉️ Contact</a>
                    <a className={"button " + (pN == "/books" ? "selected" : "")} href="/books">📚 Reads</a>
                    <a className={"button"} href="/Resume.pdf">📋 Resume</a>
                    <h3 className="subHeader">Projects</h3>
                    {
                        projects.map((elem, key) => (
                            <a className="button" href={elem.link} key={key}><img src={elem.image} /> {elem.name}</a>
                        ))
                    }
                    <h3 className="subHeader">Socials</h3>
                    <a className="button" href="https://www.linkedin.com/in/jetmondeng/"><img src={linkedIn} /> LinkedIn</a>
                </div>
            </div>
        )
    }
}

export default NavBar;
import { Component, ReactNode } from "react";
import "./styling/Page.css"
import "./styling/specifics/Home.css"
import headshotImage from "../imgs/headshot.jpg"
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";

class Home extends Component {
    render(): ReactNode {
        return(
            <div className="postRoot">
                <div className="postContainer">
                    <img className="headshot" src={headshotImage} style={{marginTop: "130px"}} />
                    <h2>Hello, I am Jetmon</h2>
                    <p>I am a Software Engineering student at <a className="rit bold" href="https://www.rit.edu/">RIT</a>, currently seeking an Co-Op for Spring and Summer 2025. I have worked in Python, JavaScript, Java, and HTML+CSS.</p>
                    <p>This site runs on ReactJS, Express.JS, PostgreSQL, served through a server on DigitalOcean using CloudFlare nameservers.</p>
                    <p>Check out the source code <a className="blue nodecoration" href="https://github.com/pybash/PersonalWebsite">here</a></p>
                    <h3 className="subtitle">Projects & Experience</h3>
                    <ProjectPreview name="SSE Website, Project Page" subtitle="Made the frontend displaying ongoing and past SSE projects." date="Jan 2025"/>
                </div>
            </div>
        )
    }
}

export default Home;
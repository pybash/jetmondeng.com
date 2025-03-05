import { Component, ReactNode } from "react";
import "./styling/Page.css"
import "./styling/specifics/Home.css"
import headshotImage from "../imgs/headshot.jpg"
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";

const projects: {name: string, subtitle: string[], date: string, image: string, link?:string}[] = [
    {
        "name": "HoloCap, Club Project for Society for Software Engineers",
        "subtitle": ["Planned as a live-captioned Heads-Up Display to help hearing-impaired students understand professors or other students in situations where a sign-language interpreter was difficult or unavailable.", "•	Designed for the Microsoft HoloLens 1 using ONNX Runtime Web, Silero VAD, and the OpenAI Whisper open-source model. Made with Typescript for maintainability and using JavaScript’s benefit of future scalability"],
        "date": "Jan 2025",
        "image": "/project_images/SSEWebsite/2.png",
        "link": "https://github.com/pybash/HoloCap"
    },
    {
        "name": "SSE Website, Project Page",
        "subtitle": ["Designed the user interface for the Project page and programmed the front end as well. Planned the page with user satisfaction in mind, which smooths out the user experience. Developed with Next.JS, with each iteration improving. Developed in an iterative development environment, promoting team collaboration."],
        "date": "Jan 2025",
        "image": "/project_images/SSEWebsite/1.png"
    }
]

class Home extends Component {

    render(): ReactNode {
        return(
            <div className="postRoot">
                <div className="postContainer">
                    <img className="headshot" src={headshotImage} style={{marginTop: "130px", borderRadius: "7px"}} />
                    <h2>Hello, I am Jetmon</h2>
                    <p>I am a Software Engineering student at <a className="rit bold" href="https://www.rit.edu/">RIT</a>, currently seeking Co-Ops for Summer and Fall 2025. I have worked in Python, JavaScript, Java, and HTML+CSS.</p>
                    <p>This site runs on ReactJS, Express.JS, PostgreSQL, served through a server on DigitalOcean using CloudFlare nameservers.</p>
                    <p>Check out the source code <a className="blue nodecoration" href="https://github.com/pybash/jetmondeng.com">here</a></p>
                    <p>See my resume <a className="blue nodecoration" href="/Resume.pdf">here</a></p>
                    <h3 className="subtitle">Relevant Experience</h3>
                    {
                        projects.map((elem, key) => (
                            <ProjectPreview key={key} name={elem.name} subtitle={elem.subtitle} date={elem.date} image={elem.image} link={elem.link}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Home;
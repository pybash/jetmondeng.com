import React, { Component, PropsWithChildren, PropsWithRef } from "react";
import './ProjectPreview.css'

interface ProjectPreviewArguments extends PropsWithChildren<{}> {
    name: string;
    subtitle: string[];
    date: string;
    image: string;
    link?: string;
}
class ProjectPreview extends Component<ProjectPreviewArguments> {

    constructor(props: ProjectPreviewArguments) {
        super(props);
    }

    render() {
        return(
            <div style={{paddingTop: "15px", paddingBottom: "15px"}}>
                <img src={this.props.image} className="projectPreviewImage"/>
                <div className="projectPreviewDetails">
                    <div className="previewContainer">
                        <h3 style={{width: "80%"}}>{this.props.name}</h3>
                        <p className="previewText dateText" style={{width: "20%"}}>{this.props.date}</p>
                    </div>
                   
                    {
                        this.props.subtitle.map((elem, key) => (
                            <p className="previewSub" key={key}>{elem}</p>
                        ))
                    }
                    {
                        (this.props.link) ?
                        <a href={this.props.link}>Link to project</a>
                        :
                        undefined
                    }
                </div>
            </div>
        )
    }
}
export default ProjectPreview;
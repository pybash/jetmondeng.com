import React, { Component, PropsWithChildren, PropsWithRef } from "react";
import './ProjectPreview.css'

interface ProjectPreviewArguments extends PropsWithChildren<{}> {
    name: string;
    subtitle: string;
    date: string;
}
class ProjectPreview extends Component<ProjectPreviewArguments> {

    constructor(props: ProjectPreviewArguments) {
        super(props);
    }

    render() {
        return(
            <div>
                <img src="https://placehold.co/200x400" className="projectPreviewImage"/>
                <div className="projectPreviewDetails">
                    <div className="previewContainer">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.subtitle}</p>
                    </div>
                    <p className="previewText">{this.props.date}</p>
                </div>
            </div>
        )
    }
}
export default ProjectPreview;
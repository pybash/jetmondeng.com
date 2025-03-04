import { Component, PropsWithChildren, ReactNode } from "react";
import "./styling/Page.css"

const serv = require("../ReactConfig.json")

type MyState = {
    booklist: Array<{
        name: string
    }>
};

class Books extends Component<{}, MyState> {
    constructor(props: PropsWithChildren) {
        super(props);

        this.state = {
            booklist: []
        }

        fetch(serv.server)
            .then((res) => res.json())
            .then((res) => {
            this.setState({
                booklist: res
            })
        })
    }

    render(): ReactNode {
        return (
            <div className="postRoot">
                <div className="postContainer">
                    {
                        this.state.booklist.map((val) => {
                            return (<p>{val["name"]}</p>)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Books;
import { Component, PropsWithChildren, ReactNode } from "react";
import "./styling/Page.css"
import config from "../ReactConfig.json"
import BookReview from "../components/BookReview/BookReview";

type MyState = {
    booklist: {bookname: string, rating: number, review: string, bookimage: string, author: string}[]
};

let placeholderBooks: {bookname: string, rating: number, review: string, bookimage: string, author: string}[] = [
    {
        bookname: "One Up On Wall Sreet",
        author: "Peter Lynch",
        bookimage: "/book_images/ouows.png",
        rating: 5,
        review: "Fantastic book with fantastic insight on trading. A common motif is to \"Know what you own, and why you own it.\". The essentials of researching a market and having full confidence in your companies."
    }
]

class Books extends Component<{}, MyState> {
    constructor(props: PropsWithChildren) {
        super(props);

        this.state = {
            booklist: placeholderBooks
        }

        // fetch("/api/getPosts")
        //     .then((res) => res.json())
        //     .then((res) => {
        //     this.setState({
        //         booklist: res
        //     })
        //     console.log(res)
        // })
        console.log(this.state.booklist)
    }

    render(): ReactNode {
        return (
            <div className="postRoot">
                <div className="postContainer" style={{marginTop: "130px"}}>
                    <h1>Book Reviews</h1>
                    <p>These are some of the books I have read, this is also the section where I use PostgreSQL!</p>
                    <p>Here would be a more up to date list: <a className="blue nodecoration" href="https://www.goodreads.com/user/show/184395079-jetmon-deng">GoodReads</a></p>
                    {
                        this.state.booklist.map((val, key) => (
                            <BookReview bookInfo={val} key={key} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Books;
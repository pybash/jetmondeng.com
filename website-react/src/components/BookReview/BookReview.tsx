import "./BookReview.css"

export default function BookReview ({bookInfo}: {bookInfo: {bookname: string, rating: number, review: string, bookimage: string, author: string}}) {
    return(
        <div className="bookContainer">
            <div className="bookImageContainer">
                <img src={bookInfo.bookimage}  className="bookImage"/>
            </div>
            <div className="bookInformationContainer">
                
                <h1 className="bookTitle">{bookInfo.bookname}</h1>
                <h2 className="bookAuthor">{bookInfo.author}</h2>
                <div>
                {
                    Array.from(Array(bookInfo.rating), (e, i) => (
                        <svg className="bookstar" width="18px" height="18px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#ffc629"></path> </g></svg>
                    ))
                }
                </div>
                <p className="bookReviews">{bookInfo.review}</p>
            </div>
        </div>
    )
}
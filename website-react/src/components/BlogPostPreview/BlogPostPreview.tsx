import "./BlogPostPreview.css"

export function BlogPostPreview () {
    return(
        <div className="blog-post">
            <img src="https://placehold.co/600x400" className="blog-post-img-preview" />
            <div className="blog-post-info">
                <div>
                    <h3>Post Title</h3>
                    <p>Post Description</p>
                </div>
            </div>
        </div>
    );
}
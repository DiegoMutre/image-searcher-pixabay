const Image = ({ image }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 animate__animated animate__fadeIn">
            <div className="card">
                <img
                    src={image.previewURL}
                    className="card-img-top"
                    alt={image.tags}
                />
                <div className="card-body">
                    <p className="card-text">{image.likes} likes</p>
                    <p className="card-text">{image.views} views</p>
                </div>
                <div className="card-footer">
                    <a
                        href={image.largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >
                        View Image
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Image;

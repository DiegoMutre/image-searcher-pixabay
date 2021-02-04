import PropTypes from "prop-types";

const Image = ({ hit: { previewURL, tags, likes, views, largeImageURL } }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 animate__animated animate__fadeIn">
            <div className="card">
                <img src={previewURL} className="card-img-top" alt={tags} />
                <div className="card-body">
                    <p className="card-text">{likes} likes</p>
                    <p className="card-text">{views} views</p>
                </div>
                <div className="card-footer">
                    <a
                        href={largeImageURL}
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

Image.propTypes = {
    hit: PropTypes.object.isRequired,
};

export default Image;

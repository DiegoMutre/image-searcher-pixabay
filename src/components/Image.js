const Image = ({ image }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={image.previewURL} className="card-img-top" />
            </div>
        </div>
    );
};

export default Image;

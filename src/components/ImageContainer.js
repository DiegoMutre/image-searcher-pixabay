import PropTypes from "prop-types";
import Error from "./Error";
import ImageList from "./ImageList";

const ImageContainer = ({ imageResult, error }) => {
    // if there no is result
    if (error) {
        return <Error message="No Results" />;
    }

    return <ImageList imageResult={imageResult} />;
};

ImageContainer.propTypes = {
    imageResult: PropTypes.array.isRequired,
    error: PropTypes.bool.isRequired,
};

export default ImageContainer;
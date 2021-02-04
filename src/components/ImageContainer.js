import PropTypes from "prop-types";
import Error from "./Error";
import ImageList from "./ImageList";

const ImageContainer = ({ hits, hasError }) => {
    // if there no is result
    if (hasError) {
        return <Error message="No Results" />;
    }

    return <ImageList hits={hits} />;
};

ImageContainer.propTypes = {
    hits: PropTypes.array.isRequired,
    hasError: PropTypes.bool.isRequired,
};

export default ImageContainer;

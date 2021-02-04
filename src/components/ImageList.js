import PropTypes from "prop-types";
import Image from "./Image";

const ImageList = ({ hits }) => {
    return (
        <div className="col-12 p-5 row">
            {hits.map(hit => (
                <Image hit={hit} key={hit.id} />
            ))}
        </div>
    );
};

ImageList.propTypes = {
    hits: PropTypes.array.isRequired,
};

export default ImageList;

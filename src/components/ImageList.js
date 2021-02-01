import Image from "./Image";

const ImageList = ({ imageResult }) => {
    return (
        <div className="col-12 p-5 row">
            {imageResult.map(image => (
                <Image image={image} key={image.id} />
            ))}
        </div>
    );
};

export default ImageList;

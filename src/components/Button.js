import PropTypes from "prop-types";

const Button = ({
    actualPage,
    setActualPage,
    action,
    textContent,
    totalPages,
}) => {
    // Initialize variable
    let handleButtonClick;

    // Check the action, should be previous or next
    if (action === "previous") {
        handleButtonClick = () => {
            const newPage = actualPage - 1;
            if (newPage < 1) return;

            setActualPage(newPage);
        };
    } else if (action === "next") {
        handleButtonClick = () => {
            const newPage = actualPage + 1;

            if (newPage > totalPages) return;

            setActualPage(newPage);
        };
    }

    return (
        <button className="btn btn-info mr-1" onClick={handleButtonClick}>
            {textContent}
        </button>
    );
};

Button.propTypes = {
    actualPage: PropTypes.number.isRequired,
    setActualPage: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
    totalPages: PropTypes.number.isRequired,
};

export default Button;

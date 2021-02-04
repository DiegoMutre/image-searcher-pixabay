import PropTypes from "prop-types";

const Button = ({ action, setActualPage, textContent }) => {
    // Initialize variable
    let handleButtonClick;

    // Go to jumbotron position
    const goUp = () => {
        const $jumbotron = document.querySelector(".jumbotron");
        $jumbotron.scrollIntoView({ behavior: "smooth" });
    };

    // Check the action, should be previous or next
    if (action === "previous") {
        handleButtonClick = () => {
            setActualPage(prev => prev - 1);
            goUp();
        };
    }
    if (action === "next") {
        handleButtonClick = () => {
            setActualPage(prev => prev + 1);
            goUp();
        };
    }

    return (
        <button className="btn btn-info mr-1" onClick={handleButtonClick}>
            {textContent}
        </button>
    );
};

Button.propTypes = {
    action: PropTypes.string.isRequired,
    setActualPage: PropTypes.func.isRequired,
    textContent: PropTypes.string.isRequired,
};

export default Button;

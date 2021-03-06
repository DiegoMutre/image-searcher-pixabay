import { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Form = ({ setQueryTerm, setActualPage }) => {
    // State for search term
    const [search, setSearch] = useState("");

    // State for error
    const [error, setError] = useState(false);

    // Take the input value
    const handleInputChange = e => {
        setSearch(e.target.value);
    };

    // Validate form
    const handleFormSubmit = e => {
        e.preventDefault();

        if (search.trim().length < 3) {
            setError(true);
            return;
        }

        setError(false);
        setQueryTerm(search);
        setActualPage(1);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search a image E.g. Soccer or coffee"
                        value={search}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Search"
                    />
                </div>
            </div>
            {error && <Error message="Add a search term" />}
        </form>
    );
};

Form.propTypes = {
    setQueryTerm: PropTypes.func.isRequired,
    setActualPage: PropTypes.func.isRequired,
};

export default Form;

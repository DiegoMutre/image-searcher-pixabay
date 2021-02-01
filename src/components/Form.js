import { useState } from "react";

const Form = () => {
    // State for search term
    const [search, setSearch] = useState("");

    // Take the input value
    const handleInputChange = e => {
        setSearch(e.target.value);
    };

    return (
        <form>
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
        </form>
    );
};

export default Form;

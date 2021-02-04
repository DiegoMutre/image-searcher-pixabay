import { useEffect, useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import ImageContainer from "./components/ImageContainer";
import { useImage } from "./hooks/useImage";

function App() {
    // State for query term
    const [queryTerm, setQueryTerm] = useState("");

    // State for error
    const [hasError, setHasError] = useState(false);

    // Use Custom hook
    const [{ hits, totalHits }, actualPage, setActualPage] = useImage(
        queryTerm
    );
    const totalPages = Math.round(totalHits / 30);

    // If there are no results
    useEffect(() => {
        if (queryTerm) {
            return totalHits <= 0 ? setHasError(true) : setHasError(false);
        }
    }, [totalHits, queryTerm]);

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">Image Search</p>
                <Form
                    // setActualPage={setActualPage}
                    setQueryTerm={setQueryTerm}
                />
            </div>
            <div className="row justify-content-center">
                {/* <ImageContainer /> */}

                {/* {actualPage > 1 && (
                    <Button
                        action="previous"
                        actualPage={actualPage}
                        setActualPage={setActualPage}
                        textContent="<< Previous"
                        totalPages={totalPages}
                    />
                )}
                {actualPage !== totalPages && imageResult.length ? (
                    <Button
                        action="next"
                        actualPage={actualPage}
                        setActualPage={setActualPage}
                        textContent="Next >>"
                        totalPages={totalPages}
                    />
                ) : null} */}
            </div>
        </div>
    );
}

export default App;

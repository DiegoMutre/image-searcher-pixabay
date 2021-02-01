import { useEffect, useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import ImageContainer from "./components/ImageContainer";

function App() {
    // State for query term
    const [queryTerm, setQueryTerm] = useState("");

    // State for actual page
    const [actualPage, setActualPage] = useState(1);

    // State for total pages
    const [totalPages, setTotalPages] = useState(5);

    // State for image result
    const [imageResult, setImageResult] = useState([]);

    // State for error
    const [error, setError] = useState(false);

    // Fetch the api when queryTerm changes
    useEffect(() => {
        if (queryTerm) {
            const fetchResults = async _ => {
                const apiKey = "18711312-b9d117ea3478ecfa5f02326d9";
                const imagesPerPage = 30;
                const url = `https://pixabay.com/api/?key=${apiKey}&q=${queryTerm}&page=${actualPage}&per_page=${imagesPerPage}`;

                const res = await fetch(url);
                const data = await res.json();

                if (!data.hits.length) {
                    setImageResult([]);
                    setError(true);
                    return;
                }

                setError(false);
                setImageResult(data.hits);
                const calculateTotalPages = Math.ceil(
                    data.totalHits / imagesPerPage
                );
                setTotalPages(calculateTotalPages);

                const $jumbotron = document.querySelector(".jumbotron");
                $jumbotron.scrollIntoView({ behavior: "smooth" });
            };
            fetchResults();
        }
    }, [queryTerm, actualPage]);

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">Image Search</p>
                <Form
                    setActualPage={setActualPage}
                    setQueryTerm={setQueryTerm}
                />
            </div>
            <div className="row justify-content-center">
                <ImageContainer imageResult={imageResult} error={error} />

                {actualPage > 1 && (
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
                ) : null}
            </div>
        </div>
    );
}

export default App;

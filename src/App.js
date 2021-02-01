import { useEffect, useState } from "react";
import Form from "./components/Form";
import ImageList from "./components/ImageList";

function App() {
    // State for query term
    const [queryTerm, setQueryTerm] = useState("");

    // State for actual page
    const [actualPage, setActualPage] = useState(1);

    // State for total pages
    const [totalPages, setTotalPages] = useState(5);

    // State for image result
    const [imageResult, setImageResult] = useState([]);

    // Fetch the api when queryTerm changes
    useEffect(() => {
        if (queryTerm) {
            const fetchResults = async _ => {
                const apiKey = "18711312-b9d117ea3478ecfa5f02326d9";
                const imagesPerPage = 30;
                const url = `https://pixabay.com/api/?key=${apiKey}&q=${queryTerm}&page=${actualPage}&per_page=${imagesPerPage}`;

                const res = await fetch(url);
                const data = await res.json();
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

    // When the user clicks prev page button
    const prevPage = _ => {
        const newPage = actualPage - 1;
        if (newPage < 1) return;

        setActualPage(newPage);
    };

    // When the user clicks next page button
    const nextPage = _ => {
        const newPage = actualPage + 1;

        if (newPage > totalPages) return;

        setActualPage(newPage);
    };

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">Image Search</p>
                <Form setQueryTerm={setQueryTerm} />
            </div>
            <div className="row justify-content-center">
                <ImageList imageResult={imageResult} />
                {actualPage > 1 && (
                    <button className="btn btn-info mr-1" onClick={prevPage}>
                        &laquo; Previous
                    </button>
                )}
                {actualPage !== totalPages && imageResult.length ? (
                    <button className="btn btn-info mr-1" onClick={nextPage}>
                        Next &raquo;
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default App;

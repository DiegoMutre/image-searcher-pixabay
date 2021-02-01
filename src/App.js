import { useEffect, useState } from "react";
import Form from "./components/Form";

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
            };
            fetchResults();
        }
    }, [queryTerm, actualPage]);

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">Image Search</p>
                <Form setQueryTerm={setQueryTerm} />
            </div>
        </div>
    );
}

export default App;

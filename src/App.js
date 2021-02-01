import { useEffect, useState } from "react";
import Form from "./components/Form";

function App() {
    // State for query term
    const [queryTerm, setQueryTerm] = useState("");

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

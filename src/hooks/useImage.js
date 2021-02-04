import { useEffect, useState } from "react";

export const useImage = search => {
    // State for this hook
    const [state, setState] = useState({});

    // State for the initial page
    const [page, setPage] = useState(1);

    // When the search is inserted
    useEffect(() => {
        if (search) {
            const fetchImages = async () => {
                const apiKey = process.env.REACT_APP_API_KEY;
                const imagesPerPage = 30;
                const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${imagesPerPage}&page=${page}`;
                const res = await fetch(url);
                const data = await res.json();
                return data;
            };
            fetchImages().then(img => setState(img));
        }
    }, [search, page]);

    return [state, page, setPage];
};

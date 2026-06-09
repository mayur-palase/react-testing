import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        function fetchDataAsUrl(url) {
            setLoading(true);
            fetch(url)
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((error) => setError(error || "Something went wrong..."))
                .finally(() => setLoading(false))
        }

        fetchDataAsUrl(url);
    }, [url])

    return {data, loading, error}
}
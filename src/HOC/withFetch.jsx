import { useEffect, useState } from "react"

export default function withFetch(Component, url) {
    return function FetchData({...props}) {
        console.log('url = ', url);
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        useEffect(() => {
            function fetchDataAsUrl(url) {
                setLoading(true);
                fetch(url)
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((error) => setError(error))
                .finally(() => setLoading(false))
            }

            fetchDataAsUrl(url);
        }, [url])

        return <Component data={data} error={error} loading={loading} {...props}></Component>
    }
}
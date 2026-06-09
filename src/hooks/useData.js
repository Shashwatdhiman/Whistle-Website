import { useState, useEffect } from "react";

const useData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { loading, error, data };
}

export default useData;
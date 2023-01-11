import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        handleSearch("pasta");
    }, []);

    const handleSearch = async (term) => {
        try {
            const response = await yelp.get("search", {
                params: {
                    limit: 50,
                    term,
                    location: 'Warsaw'
                }
            });
            setErrorMessage("");
            setResults(response.data.businesses);
        }
        catch (e) {
            setErrorMessage("Something went wrong...");
        }
    };

    return [handleSearch, results, errorMessage];
}
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import {useState} from "react";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [handleSearch, results, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
      return results.filter(result => result.price === price);
    }

    return (<>
        <SearchBar searchTerm={searchTerm}
                   onSearchTermChange={setSearchTerm}
                   onTermSubmit={() => handleSearch(searchTerm)}
        />
        {errorMessage ? <Text style={{ marginLeft: 15, color: "red"}}>{errorMessage}</Text> : null }
        <ScrollView>
            <ResultsList header="Cost Effective" results={filterResultsByPrice('$')}/>
            <ResultsList header="Bit Pricier" results={filterResultsByPrice('$$')}/>
            <ResultsList header="Big Spender!" results={filterResultsByPrice('$$$')}/>
            <ResultsList header="Full wypas" results={filterResultsByPrice('$$$$')}/>
        </ScrollView>
    </>);
};

const styles = StyleSheet.create({});

export default SearchScreen;
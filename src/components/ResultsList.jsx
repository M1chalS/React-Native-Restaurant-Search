import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from "./ResultsDetail";
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({header, results}) => {
    const navigation = useNavigation();

    if (!results.length) {
        return null;
    }

    return (<View style={styles.container}>
        <Text style={styles.title}>{header}</Text>
        <FlatList horizontal showsHorizontalScrollIndicator={false} data={results} keyExtractor={(result) => result.id} renderItem={({ item }) => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
            );
        }}/>
    </View>);
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;
import {View, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({searchTerm, onSearchTermChange, onTermSubmit}) => {
    return (<View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput style={styles.searchBar}
                   value={searchTerm}
                   autoCapitalize="none"
                   autoCorrect={false}
                   placeholder="Search restaurants"
                   onChangeText={onSearchTermChange}
                   onEndEditing={onTermSubmit}
        />
    </View>);
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: "row",
        marginBottom: 5
    },
    searchBar: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;
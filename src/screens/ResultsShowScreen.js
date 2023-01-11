import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import yelp from "../api/yelp";
import {useEffect, useState} from "react";
import { Feather, Foundation  } from '@expo/vector-icons';

const ResultsShowScreen = ({ route }) => {
    const [result, setResult] = useState(null);
    const { id } = route.params;

    useEffect(() => {
        getResult(id).then();
    }, []);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    if(!result) {
        return null;
    }

    return (<View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.subtitle}>{result.rating}<Feather style={styles.icon} name="star" color="black" /> {result.review_count}<Foundation style={styles.icon} name="comments" color="black" /> </Text>
        <FlatList data={result.photos}
                  renderItem={({item}) => <Image style={styles.image} source={{ uri: item}} /> }
                  keyExtractor={(photo) => photo}
        />
    </View>);
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 10
    },
    title: {
        height: 40,
        fontSize: 25,
        fontWeight: "bold"
    },
    subtitle: {
        height: 20,
        fontSize: 20,
        marginBottom: 10
    },
    icon: {
        fontSize: 22,
    }
});

export default ResultsShowScreen;
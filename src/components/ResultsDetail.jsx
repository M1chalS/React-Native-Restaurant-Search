import {View, StyleSheet, Text, Image} from 'react-native';

const ResultsDetail = ({ result }) => {
    return (<View style={styles.container}>
        {result.image_url ? <Image source={{ uri: result.image_url}} style={styles.image}/> : <View style={styles.image}><Text>Restaurant photo</Text></View>}
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.name}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>);
};

const styles = StyleSheet.create({
    container: {
      marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ResultsDetail;
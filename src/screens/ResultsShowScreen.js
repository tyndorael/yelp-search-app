import React, { useState, useEffect } from 'react';
import { Text, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}/>
    </>
  );
};

export default ResultsShowScreen;

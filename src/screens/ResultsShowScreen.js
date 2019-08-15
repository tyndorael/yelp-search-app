import React from 'react';
import { View, Text } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  return (
    <>
      <Text>Results Show id: {id}</Text>
    </>
  );
};

export default ResultsShowScreen;

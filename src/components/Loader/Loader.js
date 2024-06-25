// src/components/Loader.js
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = () => (
  <View className="flex-1 justify-center items-center">
    <ActivityIndicator size="large"/>
  </View>
);

export default Loader;

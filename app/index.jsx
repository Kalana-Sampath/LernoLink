import React from 'react';
import { View } from 'react-native';
import GetStart from './GetStart';

export default function index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GetStart />
    </View>
  );
}
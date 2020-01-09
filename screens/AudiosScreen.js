import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const AudiosScreen = ({navigation}) => {
  const toggleMenu = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <Text>Музыка</Text>
      <Button title="Боковое меню" onPress={toggleMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AudiosScreen;

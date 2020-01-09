import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const NotificationScreen = ({navigation}) => {
  const goToComment = () => {
    navigation.navigate('Comment');
  };
  return (
    <View style={styles.container}>
      <Text>Уведомления</Text>
      <Button title="Коментарии" onPress={goToComment} />
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

export default NotificationScreen;

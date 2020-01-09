import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CommentScreen = ({navigation}) => {
  const goToNotification = () => {
    navigation.navigate('Notification');
  };
  return (
    <View style={styles.container}>
      <Text>Коментарии</Text>
      <Button title="Уведомления" onPress={goToNotification} />
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

export default CommentScreen;

import React, {useState} from 'react';
import {Button} from 'react-native';
import FriendList from '../Components/FriendList';

const FriendsScreen = ({navigation}) => {
  // eslint-disable-next-line no-unused-vars
  const [friends, setFriends] = useState([
    {id: '1', name: 'Игорь'},
    {id: '2', name: 'Катя'},
    {id: '3', name: 'Андрей'},
  ]);
  const goToFriend = name => {
    navigation.navigate('Friend', {name});
  };

  const toggleMenu = () => {
    navigation.toggleDrawer();
  };

  return (
    <>
      <FriendList friends={friends} goToFriend={goToFriend} />
      <Button title="Боковое меню" onPress={toggleMenu} />
    </>
  );
};

export default FriendsScreen;

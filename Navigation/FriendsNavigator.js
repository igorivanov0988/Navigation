import {createStackNavigator} from 'react-navigation-stack';

import FriendsScreen from '../screens/FriendsScreen';
import FriendScreen from '../screens/FriendScreen';

const FriendsNavigator = createStackNavigator({
  Friends: {
    screen: FriendsScreen,
    navigationOptions: {
      title: 'Друзья',
    },
  },
  Friend: {
    screen: FriendScreen,
    navigationOptions: ({navigation}) => ({
      title: navigation.getParam('name'),
    }),
  },
});

export default FriendsNavigator;

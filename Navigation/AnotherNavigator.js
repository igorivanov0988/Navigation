import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import FriendsNavigator from './FriendsNavigator';

import AnotherScreen from '../screens/AnotherScreen';
import GroupsScreen from '../screens/GroupsScreen';
import AudiosScreen from '../screens/AudiosScreen';

const _AnotherNavigator = createStackNavigator({
  Another: {
    screen: AnotherScreen,
    navigationOptions: {
      title: 'Ещё',
      headerTitleAlign: 'center',
    },
  },
});

const _GroupsNavigator = createStackNavigator({
  Group: {
    screen: GroupsScreen,
    navigationOptions: {
      title: 'Сообщества',
      headerTitleAlign: 'center',
    },
  },
});

const _AudiosNavigator = createStackNavigator({
  Audios: {
    screen: AudiosScreen,
    navigationOptions: {
      title: 'Музыка',
      headerTitleAlign: 'center',
    },
  },
});

const AnotherNavigator = createDrawerNavigator({
  Another: {
    screen: _AnotherNavigator,
    navigationOptions: {
      title: 'Ещё',
    },
  },
  Friends: {
    screen: FriendsNavigator,
    navigationOptions: {
      title: 'Друзья',
    },
  },
  Group: {
    screen: _GroupsNavigator,
    navigationOptions: {
      title: 'Сообщества',
    },
  },
  Audios: {
    screen: _AudiosNavigator,
    navigationOptions: {
      title: 'Музыка',
    },
  },
});

export default AnotherNavigator;

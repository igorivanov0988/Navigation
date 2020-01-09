import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import NotificationNavigator from './NotificationNavigator';
import AnotherNavigator from './AnotherNavigator';

import FeedScreen from '../screens/FeedScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SearchScreen from '../screens/SearchScreen';

const _FeedNavigator = createStackNavigator({
  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      title: 'Новоcти',
      headerTitleAlign: 'center',
    },
  },
});

const _MessagesNavigator = createStackNavigator({
  Feed: {
    screen: MessagesScreen,
    navigationOptions: {
      title: 'Сообщения',
      headerTitleAlign: 'center',
    },
  },
});

const _SearchNavigator = createStackNavigator({
  Feed: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'Поиск',
      headerTitleAlign: 'center',
    },
  },
});

const AppNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: _FeedNavigator,
      navigationOptions: {
        title: 'Новоcти',
      },
    },
    Messages: {
      screen: _MessagesNavigator,
      navigationOptions: {
        title: 'Сообщения',
      },
    },
    Search: {
      screen: _SearchNavigator,
      navigationOptions: {
        title: 'Поиск',
      },
    },
    Notification:{
      screen: NotificationNavigator,
      navigationOptions:{
        title:'Уведомления',
      },
    },
    Another:{
      screen: AnotherNavigator,
      navigationOptions:{
        title:'Ещё',
      },
    },
  },
  {
    initialRouteName: 'Search',
  },
);

export default createAppContainer(AppNavigator);

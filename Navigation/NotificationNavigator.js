import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';

import NotificationScreen from '../screens/NotificationScreen';
import CommentScreen from '../screens/CommentScreen';

const _NotificationNavigator = createStackNavigator({
  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      title: 'Уведомления',
      headerTitleAlign: 'center',
    },
  },
});

const _CommentNavigator = createStackNavigator({
  Comment: {
    screen: CommentScreen,
    navigationOptions: {
      title: 'Коментарии',
      headerTitleAlign: 'center',
    },
  },
});

const NotificationNavigator = createSwitchNavigator({
  Notification: _NotificationNavigator,
  Comment: _CommentNavigator,
});

export default NotificationNavigator;

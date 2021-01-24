import PushNotification from 'react-native-push-notification';

const showNotification = (title, message, channelId) => {
  PushNotification.localNotification({
    channelId,
    title,
    message,
  });
};

const handleScheduledNotification = (title, message, channelId) => {
  PushNotification.localNotificationSchedule({
    channelId,
    title,
    message,
    // eslint-disable-next-line no-undef
    date: new date(Date.now() + 5 * 1000),
  });
};

const handleCancel = () => {
  PushNotification.cancelAllLocalNotifications();
};

export {showNotification, handleScheduledNotification, handleCancel};

import { View, Text } from "react-native";
import { notifications } from "../../mock/notifications";
import NotificationItem from "../../components/NotificationItem/NotificationItem";
import { ScrollView } from "react-native-gesture-handler";

function NotificationScreen() {
  return (
    <ScrollView className="bg-white">
      {notifications.map((notification, index) => (
        <NotificationItem
          key={index}
          title={notification.title}
          thumb={notification.thumb}
          description={notification.description}
          dateTime={notification.dateTime}
        />
      ))}
    </ScrollView>
  );
}

export default NotificationScreen;

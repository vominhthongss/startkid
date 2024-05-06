import { View, Text } from "react-native";
import { notifications } from "../../mock/notifications";
import NotificationItem from "../../components/NotificationItem/NotificationItem";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../../store/notifications/notificationsSlice";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";

function NotificationScreen() {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notifications);

  useEffect(() => {
    if (!notifications) {
      dispatch(fetchNotifications());
    }
  }, [notifications, dispatch]);
  return (
    <View className="bg-white h-full w-full">
      {notifications ? (
        <ScrollView>
          {notifications?.map((notification, index) => (
            <NotificationItem
              key={index}
              title={notification.title}
              content={notification.content}
              dateTime={notification.dateTime}
              image={notification.image}
            />
          ))}
        </ScrollView>
      ) : (
        <Loading />
      )}
    </View>
  );
}

export default NotificationScreen;

// pickMedia.js
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

const requestPermissions = async () => {
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Cần truy cập thư viện để lấy ảnh");
    }
  }
};

export const pickMedia = async (params, callback) => {
  await requestPermissions();

  let result;
  if (params.mediaType === "photo") {
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 1,
    });
  } else if (params.mediaType === "video") {
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      base64: true,
      quality: 1,
    });
  }else{
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      quality: 1,
    });
  }

  if (!result.canceled) {
    callback(result.assets[0]);
  }
};

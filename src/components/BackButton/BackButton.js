import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackIcon } from "../../../assets/svg/BackIcon";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice/modalSlice";
import CustomModal from "../../components/CustomModal/CustomModal";
import * as STRINGS from "../../constants/strings";
import { MODAL_TYPE } from "../../constants/common";

const BackButton = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const params = {
    title: STRINGS.exit,
    content: STRINGS.wantToExit,
    isHeaderButton: false,
    isFooterConfirm: true,
    handleConfirm: ()=>handleGoback()
  }

  const handleOpenModal = () => {
    dispatch(
      openModal({
        modalType: MODAL_TYPE.NORMAL,
        params: params
      })
    );
  };

  const handleGoback = () => {
    navigation.goBack();
  }

  return (
    <View className="pl-4">
      <View className="rounded-full h-8 w-8 flex-row justify-center">
        <TouchableOpacity className="self-center" onPress={()=>{handleOpenModal()}}>
          <BackIcon/>
        </TouchableOpacity>
        <CustomModal/>
      </View>
    </View>
  )
}

export default BackButton;
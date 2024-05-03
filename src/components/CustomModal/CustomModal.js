import React from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modalSlice/modalSlice';
import * as COLORS from "../../constants/colors";
import * as STRINGS from "../../constants/strings";
import OutsidePressHandler from "react-native-outside-press";

const CustomModal = () => {
  const dispatch = useDispatch();
  const { isVisible, title, content } = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View className="h-full flex justify-center items-center" style={{backgroundColor: "#D9D9D980"}}>
      <OutsidePressHandler onOutsidePress={handleClose}>
        <View className="w-80 rounded-2xl bg-white">
          <View className="rounded-t-2xl pt-2 pb-2 pl-6" style={{backgroundColor: COLORS.main}}>
            <Text className="text-lg text-white">{title}</Text>
          </View>
          <View className="pt-4 pl-6 pr-4 pb-2">
            <Text className="text-base pl-2">
              {content}
            </Text>
          </View>
          <View className="pr-4 pb-2">
            <TouchableOpacity onPress={handleClose}>
              <Text className="self-end text-base text-red-600">{STRINGS.close}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </OutsidePressHandler>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default CustomModal;

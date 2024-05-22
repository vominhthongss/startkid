import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice/modalSlice";
import OutsidePressHandler from "react-native-outside-press";
import NormalModal from "./Template/NormalModal";
import LargeHeaderIconModal from "./Template/LargeHeaderIconModal"
import { MODAL_TYPE } from "../../constants/common";

const CustomModal = () => {
  const dispatch = useDispatch();
  const { isVisible, modalType, params } = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleConfirm = () => {
    params.handleConfirm();
    handleClose();
  }

  const Template = ({}) => {

    if (modalType == MODAL_TYPE.NORMAL){
      return (
        <NormalModal params={params} handleClose={handleClose} 
        isFooterConfirm={params.isFooterConfirm} handleConfirm={handleConfirm}/>
      )
    }

    if (modalType == MODAL_TYPE.LARGE_HEADER){
      return (
        <LargeHeaderIconModal params={params} handleClose={handleClose}
        handleConfirm={handleConfirm} isError={params.isError}/>
      )
    }

    return (
      <NormalModal params={params} />
    );
  }

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View className="h-full flex justify-center items-center bg-[#D9D9D980]">
      <OutsidePressHandler onOutsidePress={()=>{}}>
        <View className="w-80 rounded-2xl bg-white">
          <Template />
        </View>
      </OutsidePressHandler>
      </View>
    </Modal>
  );
};

export default CustomModal;

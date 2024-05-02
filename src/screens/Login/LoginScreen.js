// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SCREENS_NAME from "../../constants/screensName";
import { LogoIcon } from '../../../assets/svg/LogoIcon';
import { LockIcon } from '../../../assets/svg/LockIcon';
import { PhoneIcon } from '../../../assets/svg/PhoneIcon';
import { EyeHiddenIcon } from "../../../assets/svg/EyeHiddenIcon";
import { TrashIcon } from "../../../assets/svg/TrashIcon";
import { UserIcon } from "../../../assets/svg/UserIcon";
import { EyeIcon } from "../../../assets/svg/EyeIcon";
import * as COLORS from "../../constants/colors";
import * as STRINGS from "../../constants/strings";
import RadioButton from "../../components/RadioButton/RadioButton";
import { savedPasswords } from '../../mock/savedPassword';
import OutsidePressHandler from "react-native-outside-press";

const CustomAlert = ({ isVisible, onClose, header, body, footer }) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="h-full flex justify-center items-center" style={{backgroundColor: "#D9D9D980"}}>
      <OutsidePressHandler onOutsidePress={onClose}>
        <View className="w-80 rounded-2xl bg-white">
          <View className="rounded-t-2xl pt-2 pb-2 pl-6" style={{backgroundColor: COLORS.main}}>
            {header}
          </View>
          <View className="pl-2">
            {body}
          </View>
          <View className="pr-4 pb-2">
            {footer}
          </View>
        </View>
      </OutsidePressHandler>
      </View>
    </Modal>
  );
};

const SavedPasswordBodyAlert = ({ onSelected }) =>{
  return (
    <View className="max-h-16">
      <FlatList
        data={savedPasswords}
        keyExtractor={(item, index) => index}
        renderItem={({item})=>(
          <View className="w-[95%] flex-row justify-between items-center pl-4 pb-2 pt-3" >
            <TouchableOpacity className="w-[90%]" onPress={()=>{onSelected(item.phoneNumber, item.password)}}>
              <View className="flex-row items-center">
                <UserIcon />
                <Text className="text-lg ml-4">{item.phoneNumber}</Text>
              </View>
            </TouchableOpacity>
            <View className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
              <TouchableOpacity>
                <TrashIcon />
              </TouchableOpacity>
            </View>
          </View>
        )}
      >
      </FlatList>
    </View>
  )
}

const TextBodyAlert = ({ description }) => {
  return (
    <View className="pt-4 pl-6 pr-4 pb-2">
      <Text className="text-base">{description}</Text>
    </View>
  )
}

const ModalHeader = ({title, onClose}) =>{
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-lg text-white">{title}</Text>
      {onClose ? (<TouchableOpacity onPress={onClose}><Text className="text-white text-lg pr-3">X</Text></TouchableOpacity>) : null}
    </View>
  )
}

const ModalBody = ({ modalBody }) =>{
  return (
    <View>
      {modalBody}
    </View>
  )
}

const ModalFooter = ({ text, onClose }) => {
  return (
    <TouchableOpacity onPress={onClose}>
      <Text className="self-end text-base text-red-600">{text}</Text>
    </TouchableOpacity>
  )
}

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [modalHeader, setModalHeader] = useState(null);
  const [modalBody, setModalBody] = useState(null);
  const [modalFooter, setModalFooter] = useState(null);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (phoneNumber === '1' && password === '1') {
      navigation.navigate(SCREENS_NAME.mainTab);
    } else {
        handleDisplayAlert(
          <ModalHeader title={STRINGS.unSuccessfulLogin}/>,
          <ModalBody modalBody={<TextBodyAlert description={STRINGS.unSuccessfulLoginDes}/>}/>,
          <ModalFooter text={STRINGS.close} onClose={handleClose}/>
        )
    }
  };

  const handleForgotPassword = () => {
    handleDisplayAlert(
      <ModalHeader title={STRINGS.forgotPassword}/>,
      <ModalBody modalBody={<TextBodyAlert description={STRINGS.forgotPasswordDes}/>}/>,
      <ModalFooter text={STRINGS.close} onClose={handleClose}/>
    )
  }

  const handleSavedPassword = () => {
    handleDisplayAlert(
      <ModalHeader title={STRINGS.savedPassword}/>,
      <ModalBody modalBody={<SavedPasswordBodyAlert onSelected={handleFillPhoneNumberAndPassword}/>}/>,
      null
    )
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleFillPhoneNumberAndPassword = (phoneNumber, password) => {
    setPhoneNumber(phoneNumber);
    setPassword(password);
    handleClose();
  }

  const handleDisplayAlert = (header, body, footer) => {
    setModalHeader(header)
    setModalBody(body)
    setModalFooter(footer)
    setAlertVisible(true);
  }

  const handleClose = () => {
    setAlertVisible(false);
  };

  return (
    <View className="p-10 h-full" style={{backgroundColor: COLORS.noneBasic}}>
      <View className="self-center mt-10">
        <LogoIcon />
      </View>
      <Text className="text-2xl font-bold mt-5">{STRINGS.welcome}</Text>
      <View className="w-full p-2 flex flex-row items-center mt-5 border-solid rounded-3xl border self-center" style={{ borderColor: COLORS.main }}>
        <PhoneIcon />
        <TextInput
          className="ml-2 text-base w-full"
          placeholder={STRINGS.phoneNumber}
          value={phoneNumber}
          keyboardType='number-pad'
          maxLength={10}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View className="w-full p-2 flex flex-row items-center mt-3 border-solid rounded-3xl border self-center" style={{ borderColor: COLORS.main }}>
        <LockIcon />
        <TextInput
          className="ml-2 text-base w-[82%]"
          placeholder={STRINGS.password}
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {isPasswordVisible ? <EyeHiddenIcon /> : <EyeIcon />}
        </TouchableOpacity>
      </View>
      <View className="mt-4 flex-row items-center justify-between">
        <RadioButton
          label={STRINGS.rememberPassword}
          isSelected={selectedOption}
          onPress={() => setSelectedOption(!selectedOption)}
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={{color: "#00000066"}} className="text-base" >{STRINGS.forgotPassword}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="h-[6%] w-[60%] mt-8 rounded-3xl flex flex-row items-center justify-center self-center" style={{backgroundColor: COLORS.main}}
        onPress={handleLogin}>
        <Text className="text-lg" style={{color: COLORS.noneBasic}}>{STRINGS.login}</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-4 self-center" onPress={handleSavedPassword}>
        <Text style={{color: "#00000066"}}>{STRINGS.savedPassword}</Text>
      </TouchableOpacity>
        <CustomAlert
          isVisible={alertVisible}
          onClose={handleClose}
          header={modalHeader}
          body={modalBody}
          footer={modalFooter}
        />
    </View>
    
  );
};

export default LoginScreen;

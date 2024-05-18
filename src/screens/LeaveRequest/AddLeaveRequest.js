import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Text, Modal, FlatList, TouchableOpacity } from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { compareAsc } from "date-fns";
import formatDateTime from "../../utils/formatDateTime";
import RadioButton from "../../components/RadioButton/RadioButton";
import { CalendarIcon } from "../../../assets/svg/CalendarIcon";
import { ArrowForwardIcon } from "../../../assets/svg/ArrowForwardIcon";
import { ExpandMoreIcon } from "../../../assets/svg/ExpandMoreIcon";
import { PhotoCameraIcon } from "../../../assets/svg/PhotoCameraIcon";
import { ImageIcon } from "../../../assets/svg/ImageIcon";
import { CloseIcon } from "../../../assets/svg/CloseIcon";
import * as COLORS from "../../constants/colors";
import * as STRINGS from "../../constants/strings";
import { openModal } from "../../store/modalSlice/modalSlice";
import CustomModal from "../../components/CustomModal/CustomModal";
import { MODAL_TYPE } from "../../constants/common";
import { DATE_TYPE } from "../../constants/common";
import { SESSION_TYPE } from "../../constants/common";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimePicker = ({ startDate, endDate, showDatePicker }) => {
  return (
    <View className="w-full flex flex-row items-center justify-around self-center rounded-lg pt-2 pb-2"
      style={{
        backgroundColor: COLORS.noneBasic,
        shadowColor: COLORS.dark,
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      }}>
      <View>
        <Text className="text-[#999999]">{STRINGS.startDate}</Text>
        <View className="flex flex-row ml-5">
          <Text className="mt-[3] mr-2 text-base">{formatDateTime(startDate, "DD/MM/YYYY")}</Text>
          <View>
            <TouchableOpacity onPress={() => showDatePicker(DATE_TYPE.START_DATE)}><CalendarIcon /></TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <ArrowForwardIcon />
      </View>
      <View>
        <Text className="text-[#999999]">{STRINGS.endDate}</Text>
        <View className="flex flex-row ml-5">
          <Text className="mt-[3] mr-2 text-base">{formatDateTime(endDate, "DD/MM/YYYY")}</Text>
          <TouchableOpacity onPress={() => showDatePicker(DATE_TYPE.END_DATE)}><CalendarIcon /></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const DetailLeaveRequest = ({
  isVisible,
  onClose,
  dateRangeList,
  onSelect,
  allCheck,
  isMorningAll,
  isAftrenoonAll
}) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}>
      <View
        className="h-full flex justify-center items-center"
        style={{ backgroundColor: "#D9D9D980" }}>
        <OutsidePressHandler onOutsidePress={onClose}>
          <View className="w-80 rounded-2xl bg-white">
            <View
              className="rounded-t-2xl pt-2 pb-2 pl-6"
              style={{ backgroundColor: COLORS.main }}>
              <View className="flex-row items-center justify-between">
                <Text className="text-lg text-white">
                  {STRINGS.detailLeave}
                </Text>
                <TouchableOpacity onPress={onClose} className="mr-2">
                  <CloseIcon/>
                </TouchableOpacity>
              </View>
            </View>
            <View className="self-center">
              <View className="w-[95%] self-center flex flex-row">
                <Text className="w-[40%]"></Text>
                <View className="w-[60%] flex flex-row justify-around">
                  <Text className="">{STRINGS.morning}</Text>
                  <Text className="">{STRINGS.afternoon}</Text>
                </View>
              </View>
                  <View className="h-36 w-[95%] self-center">
                <View className="flex flex-row border-b border-[#DADADA]">
                  <Text className="w-[40%]">{STRINGS.selectCommon}</Text>
                  <View className="w-[60%] flex flex-row justify-around">
                    <View className="flex-col items-center">
                      <RadioButton
                        isSelected={isMorningAll}
                        onPress={()=>allCheck(SESSION_TYPE.MORNING)}
                        dotColor="#EA3637"/>
                    </View>
                    <View className="flex-col items-center">
                      <RadioButton
                        isSelected={isAftrenoonAll}
                        onPress={()=>allCheck(SESSION_TYPE.AFTERNOON)} 
                        dotColor="#EA3637"/>
                    </View>
                  </View>
                </View>
                <FlatList
                  data={dateRangeList}
                  keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => (
                    <View className="flex flex-row items-center border-b border-[#DADADA]">
                      <Text className="w-[40%]">{item.date}</Text>
                      <View className="w-[60%] w-flex flex-row justify-around">
                        <View className="flex-col items-center">
                          <RadioButton
                            isSelected={item.session.morning}
                            onPress={() => onSelect(index, !item.session.morning, SESSION_TYPE.MORNING)} 
                            dotColor="#EA3637"/>
                        </View>
                        <View className="flex-col items-center">
                          <RadioButton
                            isSelected={item.session.afternoon}
                            onPress={() => onSelect(index, !item.session.afternoon, SESSION_TYPE.AFTERNOON)} 
                            dotColor="#EA3637"/>
                        </View>
                      </View>
                    </View>
                  )}></FlatList>
              </View>
            </View>
          </View>
        </OutsidePressHandler>
      </View>
    </Modal>
  );
};


const AddLeaveRequestScreen = ({ }) => {
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndatePickerVisibility] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [content, setContent] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [dateRangeList, setDateRangeList] = useState([]);
  const [isMorningAll, setMorningAll] = useState(false);
  const [isAftrenoonAll, setAftrenoonAll] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const showDatePicker = (type) => {
    if (type == DATE_TYPE.START_DATE) {
      setStartDatePickerVisibility(true);
    } else {
      setEndatePickerVisibility(true);
    }

  };

  const hideDatePicker = (type) => {
    if (type == DATE_TYPE.START_DATE) {
      setStartDatePickerVisibility(false);
    } else {
      setEndatePickerVisibility(false);
    }
  };

  const setStDate = (date) => {
    setStartDate(date);
    hideDatePicker(DATE_TYPE.START_DATE);
  };

  const setEdDate = (date) => {
    setEndDate(date);
    hideDatePicker(DATE_TYPE.END_DATE);
  };

  const handleDetailLeave = () => {
    if(compareAsc(startDate, endDate) > 0){
      const params = {
        title: STRINGS.alertName,
        content: STRINGS.startLargerEnd
      }
      handleOpenModal(MODAL_TYPE.NORMAL, params);
      return;
    }

    if (dateRangeList){
      if (dateRangeList.length == 0){
        setDateRangeList(getDatesArray(startDate, endDate));
      }else{
        const newDateRangeList = getDatesArray(startDate, endDate);
        newDateRangeList.map(newDateRange => {
          
          const filtered = dateRangeList.filter(dateRange => dateRange.date == newDateRange.date);
          if (filtered.length > 0){
            newDateRange.session = filtered[0].session;
          }
        });

        const allMorningCheck = newDateRangeList.some(dateRange=>dateRange.session.morning == false);
        const allAfterenoonCheck = newDateRangeList.some(dateRange=>dateRange.session.afternoon == false);
        setMorningAll(!allMorningCheck);
        setAftrenoonAll(!allAfterenoonCheck);

        setDateRangeList(newDateRangeList);
      }
    }else{

      setDateRangeList(getDatesArray(startDate, endDate));
      setAftrenoonAll(false);
      setMorningAll(false);
    }

    setAlertVisible(true);
  }

  function getDatesArray(startDate, endDate) {
    let datesArray = [];
    const start = new Date(startDate);
    const end = new Date(endDate);

    for (let dt = start; dt.valueOf() <= end.valueOf(); dt.setDate(dt.getDate() + 1)) {
      // Add weekday without weekend
      if (new Date(dt).getDay() != 0 && new Date(dt).getDay() != 6) {
        datesArray.push(
          {
            date: formatDateTime(new Date(dt).toISOString().split("T")[0], "WD, DD/MM/YYYY"), 
            session: {
              morning: false,
              afternoon: false
            } 
          }
        );
      }
    }
    return datesArray;
  }

  const handleAllCheck = (session) => {
    
    dateRangeList.map((dateRange)=>{
      if (session == SESSION_TYPE.MORNING) {
        dateRange.session[SESSION_TYPE.MORNING] = !isMorningAll;
        setMorningAll(!isMorningAll);
      } else {

        dateRange.session[SESSION_TYPE.AFTERNOON] = !isAftrenoonAll;
        setAftrenoonAll(!isAftrenoonAll);
      }
    });
  }

  const handleSelectSession = (index, value, session) => {
    dateRangeList[index].session[session] = value;
    handleDetailLeave();
  }

  const handleSendLeaveRequest = () => {

    if (content){
      const params = {
        title: STRINGS.alertName,
        content: STRINGS.leaveRqSuccessful,
        isFooterConfirm: true,
        isError: false,
        handleConfirm: ()=>handleGoback()
      }
      handleOpenModal(MODAL_TYPE.LARGE_HEADER, params);
    }else{
      const params = {
        title: STRINGS.alertName,
        content: STRINGS.noBlank,
        isFooterConfirm: true,
        isError: true,
        handleConfirm: ()=>{}
      }

      handleOpenModal(MODAL_TYPE.LARGE_HEADER, params);
    }
  }

  const handleOpenModal = (modalType, params) => {
    dispatch(
      openModal({
        modalType: modalType,
        params: params
      })
    );
  };

  const handleGoback = () => {
    navigation.goBack();
  }

  return (
    <View className="p-3 bg-white h-full">
      <View>
        <DateTimePicker startDate={startDate} showDatePicker={showDatePicker} endDate={endDate} />
        <DateTimePickerModal
          isVisible={isStartDatePickerVisible}
          mode="date"
          onConfirm={setStDate}
          onCancel={()=>hideDatePicker(DATE_TYPE.START_DATE)}/>
        <DateTimePickerModal
          isVisible={isEndDatePickerVisible}
          mode="date"
          onConfirm={setEdDate}
          onCancel={()=>hideDatePicker(DATE_TYPE.END_DATE)}/>
      </View>
      <View>
        <View className="w-[100%] self-center flex flex-row justify-between mt-5 mb-3 pl-3 ">
          <Text className="text-base text-[#0A6843]">{STRINGS.content}</Text>
          <TouchableOpacity className="flex flex-row items-center" onPress={() => handleDetailLeave(startDate, endDate)}>
            <Text className="text-base text-[#0A6843]">{STRINGS.detailLeave}</Text>
            <View className="mt-1">
              <ExpandMoreIcon />
            </View>
          </TouchableOpacity>
        </View>
        <View className="h-[80%] p-3 bg-[#E3FFF4E5] rounded-lg"
          style={{
            shadowColor: COLORS.dark,
            shadowOffset: { width: 2, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 0,
            elevation: 5,
          }}>
          <TextInput className="h-[95%] text-xs" style={{ textAlignVertical: "top" }}
            multiline={true}
            numberOfLines={4}
            placeholder={STRINGS.leavePlaceholder}
            onChangeText={setContent}
            value={content} />
          <View className="self-end flex flex-row w-[20%] justify-around items-center">
            <TouchableOpacity>
              <PhotoCameraIcon size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageIcon size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        className="absolute bottom-8 self-center px-4 py-2 rounded-3xl bg-[#0A6843]"
        onPress={handleSendLeaveRequest}>
        <View className="flex flex-row items-center">
          <Text className="text-white ml-2">{STRINGS.sendLeaveRq}</Text>
        </View>
      </TouchableOpacity>
      <DetailLeaveRequest
        onClose={() => setAlertVisible(false)}
        dateRangeList={dateRangeList} 
        isVisible={alertVisible}
        allCheck={handleAllCheck}
        isAftrenoonAll={isAftrenoonAll}
        isMorningAll={isMorningAll}
        onSelect={handleSelectSession}/>
      <CustomModal />
    </View>

  )
}

export default AddLeaveRequestScreen;
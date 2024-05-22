import { View, Text, TouchableOpacity } from "react-native";
import * as COLORS from "../../../constants/colors";
import { CloseIcon } from "../../../../assets/svg/CloseIcon";
import { CancelIcon } from "../../../../assets/svg/Cancelcon";
import { CheckCircleIcon } from "../../../../assets/svg/CheckCircleIcon";

const LargeHeaderIconModal = ({params, handleConfirm, isError}) => {

  console.log(isError);
  return (
    <View>
      <View>
        <View 
          className="flex flex-row items-center justify-center 
            absolute -ml-10 top-[-40] left-1/2 transform -translate-x-1/2 
            rounded-full w-20 h-20 bg-white">
              {
                isError ? (<CancelIcon/>) : (<CheckCircleIcon/>)
              }
        </View>
      </View>
      
      <View className="p-4 flex-col items-center">
        <Text className="mt-6 text-lg">{params.title}</Text>
        <View className="p-1 mb-2">
          <Text className="text-sm pl-2">
            {params.content}
          </Text>
        </View>
        {
          isError ?
          (<TouchableOpacity className="flex flex-row h-8 w-48 items-center justify-center rounded-full m-2 bg-[#EA3637]" onPress={handleConfirm}>
          <CancelIcon size={20} color="#fff"/>
          <Text className="text-white ml-2">OK</Text>
          </TouchableOpacity>):
          (<TouchableOpacity className="flex flex-row h-8 w-48 items-center justify-center rounded-full m-2 bg-[#0A6843]" onPress={handleConfirm}>
          <CheckCircleIcon size={20} color="#fff"/>
          <Text className="text-white ml-2">OK</Text>
        </TouchableOpacity>)
        }
      </View>
    </View>
  )
}

export default LargeHeaderIconModal;
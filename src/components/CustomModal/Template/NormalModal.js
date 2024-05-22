import { View, Text, TouchableOpacity } from "react-native";
import * as COLORS from "../../../constants/colors";
import { CloseIcon } from '../../../../assets/svg/CloseIcon';
import * as STRINGS from "../../../constants/strings";

const NormalModal = ({params, handleClose, handleConfirm, isFooterConfirm}) => {
  return (
    <View>
      <View className="rounded-t-2xl pt-2 pb-2 pl-6" style={{backgroundColor: COLORS.main}}>
      <View className="flex-row items-center justify-between">
        <Text className="text-lg text-white">{params.title}</Text>
        {params.isHeaderButton ? 
        (<TouchableOpacity onPress={handleClose} className="mr-2">
          <CloseIcon/>
        </TouchableOpacity>)
        : null}
      </View>
    </View>
      <View className="pt-4 pl-6 pr-4 pb-2">
        <Text className="text-sm pl-2">
          {params.content}
        </Text>
      </View>
      { isFooterConfirm ? 
        (<View className="flex flex-row items-end justify-evenly">
          <TouchableOpacity className="p-2 ml-6 mr-6" onPress={handleConfirm}>
            <Text>{STRINGS.yes}</Text>
          </TouchableOpacity>
          <View className="mr-4 border-x border h-8 border-[#EA3637]"/>
          <TouchableOpacity className="p-2" onPress={handleClose}>
            <Text>{STRINGS.no}</Text>
          </TouchableOpacity>
        </View>):
        (<View className="pr-4 pb-2">
          <TouchableOpacity onPress={handleClose}>
            <Text className="self-end text-base text-red-600">{STRINGS.close}</Text>
          </TouchableOpacity>
        </View>)
      }
    </View>
  )
}

export default NormalModal;
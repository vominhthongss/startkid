import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { contacts } from "../../mock/contacts";
import { SearchIcon } from "../../../assets/svg/SearchIcon";
import { CallIcon } from "../../../assets/svg/CallIcon";
import * as COLORS from "../../constants/colors";
import * as STRINGS from "../../constants/strings";
import { noImage } from "../../constants/images";

const ContactItem = ({ contact }) => (
  <View
    className="w-[90%] flex flex-row items-center justify-between rounded-2xl self-center p-2 m-[2%]"
    style={{
      backgroundColor: COLORS.noneBasic,
      shadowColor: COLORS.dark,
      shadowOffset: { width: 2, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    }}>
    <View className="flex flex-row items-center">
      <Image
        source={{ uri: contact.avatar || noImage }}
        className="ml-3 w-16 h-16 rounded-full"
        onLoad={() => {}}
        onError={() => {}}
      />
      <View className="ml-6">
        <Text className="text-[#333333] text-lg">{contact.name}</Text>
        <Text className="text-[#999999] text-lg">{contact.phoneNumber}</Text>
      </View>
    </View>
    <View className="mr-4">
      <TouchableOpacity onPress={() => {}}>
        <CallIcon />
      </TouchableOpacity>
    </View>
  </View>
);

const ContactList = ({ contacts }) => {
  const renderCategory = ({ item }) => {
    return (
      <View>
        {item.contactItems.length != 0 ? (
          <Text className="ml-5 text-lg">{item.category}</Text>
        ) : (
          <Text className="hidden"></Text>
        )}
        <FlatList
          data={item.contactItems}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <ContactItem contact={item} />}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item, index) => index}
      renderItem={renderCategory}
    />
  );
};

function ContactScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const placeholder = STRINGS.seacrh;

  const contactsFiltered = contacts.map((contact) => {
    let contactTemp = { ...contact };
    contactTemp.contactItems = contact.contactItems.filter((contactItem) => {
      return searchQuery
        ? contactItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contactItem.phoneNumber.includes(searchQuery)
        : contactItem;
    });

    return contactTemp;
  });

  return (
    <View style={{ backgroundColor: "#fff" }} className="h-full">
      <View
        className="w-[90%] p-2 flex flex-row items-center mt-5 border-solid rounded-3xl border self-center"
        style={{ borderColor: COLORS.main }}>
        <SearchIcon />
        <TextInput
          className="ml-2 text-base w-full"
          placeholder={placeholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View className="mt-3 h-[90%]">
        <ContactList contacts={contactsFiltered} />
      </View>
    </View>
  );
}

export default ContactScreen;

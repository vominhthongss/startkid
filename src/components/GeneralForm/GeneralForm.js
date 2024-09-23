import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import { parseToForm } from "../../helps/parseToForm";
import CustomizeButton from "../CustomizeButton/CustomizeButton";
import ErrorText from "../ErrorText/ErrorText";
import CustomizeRadio from "../CustomizeRadio/CustomizeRadio";
import CustomizeTextInput from "../CustomizeTextInput/CustomizeTextInput";
import CustomizeTextField from "../CustomizeTextField/CustomizeTextField";
import * as STRINGS from "../../constants/strings";

function GeneralForm({
  fields,
  handleData,
  titleSubmitBtn,
  customStyleButton = "",
  isReadOnly = false,
}) {
  const handleUnread = () => {
    isReadOnly = false;
  };
  const fieldRender = (field, key, { handleChange, values, errors }) => {
    let element = null;
    const commonProps = {
      key: key,
      label: field.label,
      placeholder: field.placeholder,
      value: values[field.name],
      onChangeText: handleChange(field.name),
      type: field.type,
      editable: !isReadOnly,
    };

    switch (field.type) {
      case "number":
      case "time":
      case "text":
      case "email":
      case "password":
        element = (
          <View className="relative">
            <CustomizeTextInput {...commonProps} />
            <View className="absolute top-0 right-0">
              {!isReadOnly && errors[field.name] && (
                <ErrorText content={errors[field.name]} />
              )}
            </View>
          </View>
        );
        break;
      case "textfield":
        element = (
          <View className="relative">
            <CustomizeTextField {...commonProps} editable={!isReadOnly} />
            <View className="absolute top-0 right-0">
              {!isReadOnly && errors[field.name] && (
                <ErrorText content={errors[field.name]} />
              )}
            </View>
          </View>
        );
        break;
      case "radio":
        element = (
          <View className="relative flex flex-row justify-start">
            <CustomizeRadio
              key={key}
              label={field.label}
              value={values[field.name]}
              options={field.options}
              onChangeText={handleChange(field.name)}
              editable={isReadOnly}
            />
            <View className="absolute top-0 right-0">
              {!isReadOnly && errors[field.name] && (
                <ErrorText content={errors[field.name]} />
              )}
            </View>
          </View>
        );
        break;
      default:
        element = (
          <View className="relative">
            <CustomizeTextInput {...commonProps} />
            <View className="absolute top-0 right-0">
              {!isReadOnly && errors[field.name] && (
                <ErrorText content={errors[field.name]} />
              )}
            </View>
          </View>
        );
        break;
    }

    return element;
  };

  return (
    <Formik
      initialValues={parseToForm(fields)}
      onSubmit={(values) => handleData(values)}
      validateOnChange={false}
      validateOnBlur={false}
      validate={(values) => {
        const errors = {};
        fields.forEach((field) => {
          if (!values[field.name] && field.isRequired && !isReadOnly) {
            errors[field.name] = `Phải có ${field.label.toLowerCase()} !`;
          } else if (
            field.type === "email" &&
            !/\S+@\S+\.\S+/.test(values[field.name])
          ) {
            errors[field.name] = "Địa chỉ email không hợp lệ !";
          } else if (
            field.minLength &&
            values[field.name].length < field.minLength
          ) {
            errors[
              field.name
            ] = `${field.label} phải có ít nhất ${field.minLength} ký tự!`;
          }
          if (
            field.name === "rePassword" &&
            values["rePassword"] !== values["newPassword"]
          ) {
            errors[field.name] = "Mật khẩu không khớp nhau !";
          }
        });
        return errors;
      }}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View className={"w-full"}>
          {fields.map((field, key) => (
            <View key={key} className={"mt-2"}>
              {fieldRender(field, key, { handleChange, values, errors })}
            </View>
          ))}
          {!isReadOnly && (
            <View className={"mt-6 mb-3"}>
              <View className={"w-full"}>
                <View className={"w-full"}>
                  <CustomizeButton
                    styleButton={customStyleButton}
                    title={titleSubmitBtn}
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
      )}
    </Formik>
  );
}

export default GeneralForm;

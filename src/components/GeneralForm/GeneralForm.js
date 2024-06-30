import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import { parseToForm } from "../../helps/parseToForm";
import CustomizeButton from "../CustomizeButton/CustomizeButton";
import ErrorText from "../ErrorText/ErrorText";
import CustomizeRadio from "../CustomizeRadio/CustomizeRadio";
import CustomizeTextInput from "../CustomizeTextInput/CustomizeTextInput";

function GeneralForm({
  fields,
  handleData,
  titleSubmitBtn,
  customStyleButton = "",
}) {
  const fieldRender = (field, key, { handleChange, values, errors }) => {
    let element = null;
    switch (field.type) {
      case "number":
        element = (
          <View className="relative">
            <CustomizeTextInput
              key={key}
              label={field.label}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChangeText={handleChange(field.name)}
              secureTextEntry={false}
              type={field.type}
            />
            <View className="absolute top-0 right-0">
              {errors[field.name] && <ErrorText content={errors[field.name]} />}
            </View>
          </View>
        );
        break;
      case "time":
        element = (
          <View className="relative">
            <CustomizeTextInput
              key={key}
              label={field.label}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChangeText={handleChange(field.name)}
              secureTextEntry={false}
              type={field.type}
            />
            <View className="absolute top-0 right-0">
              {errors[field.name] && <ErrorText content={errors[field.name]} />}
            </View>
          </View>
        );
        break;
      case "text":
        element = (
          <View className="relative">
            <CustomizeTextInput
              key={key}
              label={field.label}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChangeText={handleChange(field.name)}
              type={field.type}
            />
            <View className="absolute top-0 right-0">
              {errors[field.name] && <ErrorText content={errors[field.name]} />}
            </View>
          </View>
        );
        break;
      case "email":
        element = (
          <View className="relative">
            <CustomizeTextInput
              key={key}
              label={field.label}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChangeText={handleChange(field.name)}
              type={field.type}
            />
            <View className="absolute top-0 right-0">
              {errors[field.name] && <ErrorText content={errors[field.name]} />}
            </View>
          </View>
        );
        break;
      case "password":
        element = (
          <View className="relative">
            <CustomizeTextInput
              key={key}
              label={field.label}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChangeText={handleChange(field.name)}
              secureTextEntry={true}
              type={field.type}
            />
            <View className="absolute top-0 right-0">
              {errors[field.name] && <ErrorText content={errors[field.name]} />}
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
            />
            <View className="absolute top-0 right-0">
              {errors[field.name] && <ErrorText content={errors[field.name]} />}
            </View>
          </View>
        );
        break;
      default:
        element = (
          <View className="relative">
            <CustomizeTextInput
              key={key}
              label={field.label}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChangeText={handleChange(field.name)}
              secureTextEntry={false}
            />
            <View className="absolute top-0 right-0">
              {errors[field.name] && <ErrorText content={errors[field.name]} />}
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
        fields.map((field) => {
          if (!values[field.name] && field.isRequired) {
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
          // check fields have field have name is rePassword and newPassword different rePassword
          if (
            field.name === "rePassword" &&
            values["rePassword"] !== values["newPassword"]
          ) {
            errors[field.name] = "Mật khẩu không khớp nhau !";
          }
          return;
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
        </View>
      )}
    </Formik>
  );
}

export default GeneralForm;

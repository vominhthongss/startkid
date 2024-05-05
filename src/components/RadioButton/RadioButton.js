import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = ({ isSelected, onPress, label }) => {
  return (
    <View style={styles.radioContainer}>
      <TouchableOpacity style={styles.radioCircle} onPress={onPress}>
      {isSelected ? <View style={styles.radioDot} /> : null}
      </TouchableOpacity>
      <Text className="ml-2 text-base" style={{color: "#00000066"}}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0A684380',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    height: 8,
    width: 8,
    borderRadius: 6,
    backgroundColor: '#0A684380',
  },
});

export default RadioButton;
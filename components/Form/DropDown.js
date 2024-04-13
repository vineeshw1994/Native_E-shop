import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const Dropdown = ({ options, onSelect, placeholder }) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.input}>
        <Text>{placeholder}</Text>
      </TouchableOpacity>
      <Modal
        visible={visible}
        transparent={true}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modal}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.category}
              onPress={() => handleSelect(option)}
              style={styles.option}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  modal: {
    backgroundColor: 'white',
    top:"42.5%",
    width: '70%',
   marginHorizontal: '15%',

  },
  option: {
    padding: 7,
    borderWidth: 1,
    borderBottomColor: 'green',
    color:'black'
  },
});



export default Dropdown;

import {View, StyleSheet, Text, TextInput} from 'react-native';

// const InputBox = ({autoComplete,setValue, placeholder,value, secureTextEntry}) => {
//     return (
//         <View style={styles.container}>
//            <TextInput style={styles.input} placeholder={placeholder} autoComplete={autoComplete} autoCorrect={false} secureTextEntry={secureTextEntry} value={value} onChangeText={(text) => setValue(text)} />
//         </View>
//     );
// }

const InputBox = ({ autoComplete, setValue, placeholder, value }) => {
    const handleChangeText = (text) => {
        // If input is for contact, remove non-numeric characters before setting the value
        if (autoComplete === "tel") {
            // Remove non-numeric characters
            const numericText = text.replace(/\D/g, '');
            setValue(numericText);
        } else {
            setValue(text);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                autoCompleteType={autoComplete === "tel" ? "tel" : "off"}
                autoCorrect={false}
                value={value}
                onChangeText={handleChangeText}
                keyboardType={autoComplete === "tel" ? "phone-pad" : "default"} 
            />
        </View>
    );
};



const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10,
    },
    input:{
        width: '80%',
        backgroundColor:'white',
        height:40,
        paddingLeft:10,
        borderRadius:10,
        color:'#000000',
        borderWidth:1,
        borderColor:'gray',
    }
})

export default InputBox;

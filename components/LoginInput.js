import { StyleSheet, TextInput } from 'react-native';

const LoginInput = (props) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.func}
            style={style.inputWrapper}
            secureTextEntry={props.secure}
            placeholderTextColor={'#05DBF2'}>
        </TextInput>
    )
}

const style = StyleSheet.create({
    inputWrapper: {
        width: 306,
        height: 45,
        color: '#05DBF2',
        backgroundColor: '#252140',
        paddingHorizontal: 20,
        borderRadius: 5,
    }
});

export default LoginInput;
import react from "react";
import {View , Text , StyleSheet , Button , TouchableOpacity } from 'react-native';

const ButtonScreen = () => {
    let counter , counterT = 0;
    return(
        <View>
            <Text>Button click</Text>
            <Button
            title="Click me "
            color="blue"
            onPress={()=> console.log("Button Clicked", counter++)}
            />


        <TouchableOpacity

        onPress={()=> console.log("TouchableOpacity Clicked", counterT++)}
        >
            <Text>Click TouchableOpacity</Text>
            </TouchableOpacity>
        </View>
    );
}



export default ButtonScreen; 
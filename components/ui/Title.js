import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";


function Title({children}){
    return <Text style={styles.title}  >{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: Platform.select({ios: 2, android: 2}),
        borderColor: Colors.accent500,
        padding: 12,
        maxWidth: '80%',
        
    }
})
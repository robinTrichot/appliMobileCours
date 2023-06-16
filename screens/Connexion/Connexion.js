import ConnexionStyles from "./ConnexionStyles";
import AppStyles from "../../AppStyles";
import { Button, Text, View } from "react-native";

// la constante onLogin ici est pas connue je dois la passe
// props
export default ({onLogin}) => {
    const styles = { ...AppStyles(), ...ConnexionStyles() };
    return (
        <View style={[styles.container, styles.centered]}>
           <Button title="Se connecter" onPress={onLogin}></Button>
        </View>
    );

};
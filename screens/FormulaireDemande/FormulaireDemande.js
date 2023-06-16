import FormulaireDemandeStyles from "./FormulaireDemandeStyles";
import AppStyles from "../../AppStyles";
import { Text, View } from "react-native";



export default () => {
    const styles = { ...AppStyles(), ...FormulaireDemandeStyles() };
    return (
        <View style={[styles.container, styles.centered]}>
            <Text>Ajout demande</Text>
        </View>
    );
};
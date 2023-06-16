import ListeDemandeStyles from "./ListeDemandeStyles";
import AppStyles from "../../AppStyles";
import { Button, Text, View } from "react-native";

// j'ajoue ici une props naviguation 
// qui sert de rout comem sur angular !
export default ({ navigation }) => {
    const styles = { ...AppStyles(), ...ListeDemandeStyles() };

    const onAjoutDemande = () => {
        navigation.navigate("FormulaireDemande")
    }
    return (
        <View style={[styles.container, styles.centered]}>
            <Text>Ajout demande</Text>
            <Button title="Ajouter une demande" onPress={onAjoutDemande}></Button>
        </View>
    );
};
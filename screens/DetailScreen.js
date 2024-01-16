import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

const DetailScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Detail</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
            <StatusBar style="auto" />
        </View>
    );
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

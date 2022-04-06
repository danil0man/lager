import { StatusBar } from 'expo-status-bar';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warhammer from './assets/warhammer.jpg';
import Stock from './components/Stock.tsx';
import { useFonts } from 'expo-font';

export default function App() {
    const [loaded] = useFonts({
        cAntique: require('./assets/fonts/CaslonAntique.ttf'),
        cPro: require('./assets/fonts/CaslonPro.ttf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.base}>
                <Text
                    style={{
                        color: '#33c',
                        fontSize: 42,
                        textAlign: 'center',
                        fontFamily: 'cAntique',
                    }}
                >
                    WFRPG Lager
                </Text>
                <Image
                    source={warhammer}
                    style={{
                        width: 320,
                        height: 240,
                    }}
                />
                <Stock />
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    base: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 12,
        paddingRight: 12,
        fontFamily: 'cAntique',
    },
});

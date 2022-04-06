import { StatusBar } from 'expo-status-bar';
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
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
            <ScrollView style={styles.base}>
                <Text
                    style={{
                        color: '#394B7A',
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
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor: '#436E0F',
                    }}
                />
                <Stock />
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0D3AF',
    },
    base: {
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        fontFamily: 'cAntique',
    },
});

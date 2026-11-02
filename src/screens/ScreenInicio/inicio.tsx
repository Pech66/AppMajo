import { Container } from '../../components/container/container';
import { styles } from './stylesinicio';
import {
    ArrowRight,
    ArrowUpRight,
    Compass,
    ContactRound,
    Folder,
    Monitor,
} from 'lucide-react-native';
import {
    Pressable,
    ScrollView,
    View,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CinzelDecorative_700Bold } from '@expo-google-fonts/cinzel-decorative/700Bold';
import { useFonts } from 'expo-font';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../navigation/types';
import { useLayoutEffect } from 'react';

type Props = NativeStackScreenProps<
    RootStackParamList,
>;

export default function Inicio({ navigation }: Props) {
    const [fontsLoaded, fontError] = useFonts({
        CinzelDecorative_700Bold,
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    if (!fontsLoaded && !fontError) {
        return <View style={styles.screen} />;
    }

    const fuenteTitulo = fontsLoaded
        ? styles.decorativeFont
        : undefined;

    return (
        <SafeAreaView
            style={styles.screen}
            edges={['top', 'left', 'right', 'bottom']}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.page}>
                    <Text
                        style={[styles.pageTitle, fuenteTitulo]}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                    >
                        LAB OF MUTANT
                    </Text>

                    {/* Historia */}
                    <Container
                        style={[styles.card, styles.historyCard]}
                    >
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel="Historia. Una entrada al mundo del juego"
                            onPress={() => navigation.navigate('Historia')}
                            style={({ pressed }) => [
                                styles.historyContent,
                                pressed && styles.pressed,
                            ]}
                        >
                            <Text
                                style={[styles.historyTitle, fuenteTitulo]}
                            >
                                Historia
                            </Text>

                            {/* Espacio disponible para la futura imagen */}

                            <View style={styles.historyBottom}>
                                <Text style={styles.description}>
                                    Una entrada al mundo del juego.
                                </Text>

                                <View style={styles.circle}>
                                    <ArrowRight size={25} color="#FFFFFF" />
                                </View>
                            </View>
                        </Pressable>
                    </Container>

                    {/* Personajes y guía */}
                    <View style={styles.grid}>
                        <Container
                            style={[
                                styles.card,
                                styles.smallCard,
                                styles.tarjetaPersonajes,
                            ]}
                        >
                            <Pressable
                                accessibilityRole="button"
                                accessibilityLabel="Personajes"
                                onPress={() => navigation.navigate('Historia')}
                                style={({ pressed }) => [
                                    styles.smallContent,
                                    pressed && styles.pressed,
                                ]}
                            >
                                <View style={styles.iconRow}>
                                    <ContactRound
                                        size={27}
                                        color="#B8BABC"
                                    />

                                    <ArrowUpRight
                                        size={19}
                                        color="#B8BABC"
                                    />
                                </View>

                                <Text
                                    style={[styles.cardTitle, fuenteTitulo]}
                                    numberOfLines={1}
                                    adjustsFontSizeToFit
                                >
                                    Personajes
                                </Text>
                            </Pressable>
                        </Container>

                        <Container
                            style={[styles.card, styles.smallCard]}
                        >
                            <Pressable
                                accessibilityRole="button"
                                accessibilityLabel="Guía. Controles y mecánicas"
                                onPress={() => navigation.navigate('Guia')}
                                style={({ pressed }) => [
                                    styles.smallContent,
                                    pressed && styles.pressed,
                                ]}
                            >
                                <View style={styles.iconRow}>
                                    <Compass size={28} color="#B8BABC" />

                                    <ArrowUpRight
                                        size={19}
                                        color="#B8BABC"
                                    />
                                </View>

                                <View style={styles.textGroup}>
                                    <Text
                                        style={[styles.cardTitle, fuenteTitulo]}
                                    >
                                        Guía
                                    </Text>

                                    <Text style={styles.smallDescription}>
                                        Controles y mecánicas
                                    </Text>
                                </View>
                            </Pressable>
                        </Container>
                    </View>

                    {/* Extras */}
                    <Container style={styles.card}>
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel="Extras. Tráiler y arte conceptual"
                            onPress={() => navigation.navigate('PcExtras')}
                            style={({ pressed }) => [
                                styles.filaEnlace,
                                styles.filaExtras,
                                pressed && styles.pressed,
                            ]}
                        >
                            <View style={styles.iconoEnlace}>
                                <Folder size={27} color="#B8BABC" />
                            </View>

                            <View style={styles.contenidoEnlace}>
                                <Text
                                    style={[styles.tituloEnlace, fuenteTitulo]}
                                >
                                    Extras
                                </Text>

                                <Text style={styles.descripcionEnlace}>
                                    Tráiler y arte conceptual
                                </Text>
                            </View>

                            <View style={styles.flechaEnlace}>
                                <ArrowUpRight
                                    size={20}
                                    color="#B8BABC"
                                />
                            </View>
                        </Pressable>
                    </Container>

                    {/* Requisitos PC */}
                    <Container style={styles.card}>
                        <Pressable
                            accessibilityRole="button"
                            accessibilityLabel="Requisitos PC"
                            onPress={() => navigation.navigate('PcExtras')}
                            style={({ pressed }) => [
                                styles.filaEnlace,
                                styles.filaRequisitos,
                                pressed && styles.pressed,
                            ]}
                        >
                            <View style={styles.iconoEnlace}>
                                <Monitor size={27} color="#B8BABC" />
                            </View>

                            <View style={styles.contenidoEnlace}>
                                <Text
                                    style={[styles.tituloEnlace, fuenteTitulo]}
                                >
                                    Requisitos PC
                                </Text>
                            </View>

                            <View style={styles.flechaEnlace}>
                                <ArrowUpRight
                                    size={20}
                                    color="#B8BABC"
                                />
                            </View>
                        </Pressable>
                    </Container>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
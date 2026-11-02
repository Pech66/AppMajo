import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MoveRight } from 'lucide-react-native';
import { useFonts } from 'expo-font';
import { CinzelDecorative_700Bold } from '@expo-google-fonts/cinzel-decorative/700Bold';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../navigation/types';
import { styles } from './stylesprotector';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Inicio'
>;

export default function Protector({ navigation }: Props) {
  const [fontsLoaded, fontError] = useFonts({
    CinzelDecorative_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return <View style={styles.screen} />;
  }

  const fuenteTitulo = fontsLoaded
    ? styles.decorativeFont
    : undefined;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Título principal */}
        <View style={styles.header}>
          <Text
            accessibilityRole="header"
            style={[styles.title, fuenteTitulo]}
            numberOfLines={2}
            adjustsFontSizeToFit
            minimumFontScale={0.4}
          >
            {'LAB OF\nMUTANT'}
          </Text>
        </View>

        {/* Espacio visual para el futuro fondo */}
        <View style={styles.espacioCentral} />

        {/* Descripción y acceso */}
        <View style={styles.footer}>
          <Text style={styles.description}>
            Sumérgete en el universo de{' '}
            <Text style={[styles.gameName, fuenteTitulo]}>
              LAB OF MUTANT.
            </Text>
          </Text>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Explorar Lab of Mutant"
            onPress={() => navigation.navigate('Explorar')}
            style={({ pressed }) => [
              styles.botonExplorar,
              pressed && styles.botonPresionado,
            ]}
          >
            <Text style={styles.textoBoton}>
              Explorar
            </Text>

            <MoveRight
              size={29}
              color="#111111"
              strokeWidth={1.8}
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
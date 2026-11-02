import { useCallback, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  EyeOff,
  Flashlight,
  Keyboard,
  Mouse,
} from 'lucide-react-native';
import { useFonts } from 'expo-font';
import { CinzelDecorative_700Bold } from '@expo-google-fonts/cinzel-decorative/700Bold';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container } from '../../components/container/container';
import type { RootStackParamList } from '../../navigation/types';
import { styles } from './stylescontroles';

type Props = NativeStackScreenProps<RootStackParamList, 'Guia'>;
type Panel = 'controles' | 'sigilo' | 'linterna';

const controles = [
  { teclas: ['W', 'A', 'S', 'D'], accion: 'Moverte' },
  { teclas: ['Mouse'], accion: 'Mover la cámara' },
  { teclas: ['E'], accion: 'Interactuar' },
  { teclas: ['Shift Izq.'], accion: 'Correr (Mantener)' },
  { teclas: ['Ctrl Izq.'], accion: 'Agacharte (Alternar)' },
  { teclas: ['F'], accion: 'Encender / apagar linterna' },
  { teclas: ['Clic derecho'], accion: 'Luz intensa (Mantener)' },
  { teclas: ['Clic izquierdo'], accion: 'Golpe defensivo' },
  { teclas: ['Tab'], accion: 'Diario e inventario' },
  { teclas: ['Esc'], accion: 'Pausar / cerrar panel' },
];

const secciones: {
  id: Panel;
  categoria: string;
  titulo: string;
  descripcion?: string;
}[] = [
  {
    id: 'controles',
    categoria: 'Controles esenciales',
    titulo: 'Asignaciones de teclas',
  },
  {
    id: 'sigilo',
    categoria: 'Supervivencia',
    titulo: 'Sigilo',
    descripcion:
      'Agáchate para reducir el ruido y aprovecha las coberturas para salir de la vista de la criatura. Correr puede atraer su atención.',
  },
  {
    id: 'linterna',
    categoria: 'Herramientas',
    titulo: 'La linterna',
    descripcion:
      'Pulsa F para encender o apagar la linterna. Mantén presionado el clic derecho para utilizar la luz intensa y observar mejor tu entorno.',
  },
];

export default function Controles({ navigation }: Props) {
  const [panelesAbiertos, setPanelesAbiertos] = useState<
    Record<Panel, boolean>
  >({
    controles: false,
    sigilo: false,
    linterna: false,
  });

  const [fontsLoaded, fontError] = useFonts({
    CinzelDecorative_700Bold,
  });

  useFocusEffect(
    useCallback(() => {
      setPanelesAbiertos({
        controles: false,
        sigilo: false,
        linterna: false,
      });
    }, []),
  );

  function alternarPanel(panel: Panel) {
    setPanelesAbiertos((actual) => ({
      ...actual,
      [panel]: !actual[panel],
    }));
  }

  if (!fontsLoaded && !fontError) {
    return <View style={styles.screen} />;
  }

  const fuenteTitulo = fontsLoaded
    ? styles.decorativeFont
    : undefined;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Regresar"
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.pressed,
          ]}
        >
          <ArrowLeft size={24} color="#FFFFFF" />
        </Pressable>

        <Text style={styles.headerTitle}>GUÍA</Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.page}>
          <View style={styles.section}>
            <Text style={[styles.pageTitle, fuenteTitulo]}>
              Antes de adentrarte
            </Text>

            <Text style={styles.description}>
              Aprende a explorar, mantenerte oculto y utilizar tus
              herramientas.
            </Text>
          </View>

          {secciones.map((seccion) => {
            const abierto = panelesAbiertos[seccion.id];

            return (
              <View key={seccion.id} style={styles.section}>
                {seccion.id === 'controles' && (
                  <Text style={styles.eyebrow}>
                    TECLADO Y MOUSE
                  </Text>
                )}

                <Text
                  style={[
                    seccion.id === 'controles'
                      ? styles.sectionTitle
                      : styles.categoryTitle,
                    fuenteTitulo,
                  ]}
                >
                  {seccion.categoria}
                </Text>

                <Container style={styles.panel}>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={seccion.titulo}
                    accessibilityState={{ expanded: abierto }}
                    onPress={() => alternarPanel(seccion.id)}
                    style={({ pressed }) => [
                      styles.panelHeader,
                      pressed && styles.pressed,
                    ]}
                  >
                    <View style={styles.iconBox}>
                      {seccion.id === 'controles' && (
                        <Keyboard size={21} color="#BEBEBE" />
                      )}

                      {seccion.id === 'sigilo' && (
                        <EyeOff size={21} color="#BEBEBE" />
                      )}

                      {seccion.id === 'linterna' && (
                        <Flashlight size={21} color="#BEBEBE" />
                      )}
                    </View>

                    <Text style={styles.panelTitle}>
                      {seccion.titulo}
                    </Text>

                    {abierto ? (
                      <ChevronUp size={18} color="#BEBEBE" />
                    ) : (
                      <ChevronDown size={18} color="#BEBEBE" />
                    )}
                  </Pressable>

                  {abierto && (
                    seccion.id === 'controles' ? (
                      <View style={styles.table}>
                        <View style={styles.tableHeader}>
                          <Text
                            style={[
                              styles.columnLabel,
                              styles.keysColumn,
                            ]}
                          >
                            TECLA/S
                          </Text>

                          <Text
                            style={[
                              styles.columnLabel,
                              styles.actionColumn,
                            ]}
                          >
                            ACCIÓN
                          </Text>
                        </View>

                        {controles.map((control, indice) => (
                          <View
                            key={control.accion}
                            style={[
                              styles.tableRow,
                              indice === controles.length - 1 &&
                                styles.lastRow,
                            ]}
                          >
                            <View
                              style={[styles.keysColumn, styles.keys]}
                            >
                              {control.teclas.map((tecla) => (
                                <View
                                  key={tecla}
                                  style={styles.keyBadge}
                                >
                                  {tecla === 'Mouse' && (
                                    <Mouse
                                      size={20}
                                      color="#CECECE"
                                    />
                                  )}

                                  <Text style={styles.keyText}>
                                    {tecla}
                                  </Text>
                                </View>
                              ))}
                            </View>

                            <Text
                              style={[
                                styles.actionText,
                                styles.actionColumn,
                              ]}
                            >
                              {control.accion}
                            </Text>
                          </View>
                        ))}
                      </View>
                    ) : (
                      <Text style={styles.panelDescription}>
                        {seccion.descripcion}
                      </Text>
                    )
                  )}
                </Container>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}   
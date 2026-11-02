import { useEffect, useRef, useState } from 'react';
import {
  Alert,
  AppState,
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeft,
  ExternalLink,
  Image as ImageIcon,
  Info,
  Keyboard,
  Monitor,
  PersonStanding,
  Play,
  UserRound,
} from 'lucide-react-native';
import { useFonts } from 'expo-font';
import { CinzelDecorative_700Bold } from '@expo-google-fonts/cinzel-decorative/700Bold';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container } from '../../components/container/container';
import type { RootStackParamList } from '../../navigation/types';
import { styles } from './stylesrequisitos';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'PcExtras'
>;

type Arte = {
  id: string;
  titulo: string;
  imagen: ImageSourcePropType | null;
};

type Contenido = {
  juegoUrl: string | null;
  trailerUrl: string | null;
  trailerImagen: ImageSourcePropType | null;
  requisitos: { nombre: string; valor: string }[];
  artes: Arte[];
};

// Completa estos datos cuando estén disponibles.
const contenido: Contenido = {
  juegoUrl: null,
  trailerUrl: null,
  trailerImagen: null,

  requisitos: [],

  artes: [
    {
      id: '01',
      titulo: 'Arte conceptual 01',
      imagen: null,
    },
    {
      id: '02',
      titulo: 'Arte conceptual 02',
      imagen: null,
    },
  ],
};

const caracteristicas = [
  { texto: 'Windows', Icono: Monitor },
  { texto: 'Un jugador', Icono: UserRound },
  { texto: 'Teclado y mouse', Icono: Keyboard },
  { texto: 'Primera persona', Icono: PersonStanding },
];

const TIEMPO_CAMBIO = 5000;

export default function Requisitos({ navigation }: Props) {
  const [fontsLoaded, fontError] = useFonts({
    CinzelDecorative_700Bold,
  });

  const pantallaActiva = useIsFocused();
  const carruselRef = useRef<ScrollView>(null);
  const indiceRef = useRef(0);

  const [anchoGaleria, setAnchoGaleria] = useState(0);
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [arrastrando, setArrastrando] = useState(false);
  const [aplicacionActiva, setAplicacionActiva] = useState(
    AppState.currentState === null ||
      AppState.currentState === 'active',
  );

  // Detener el cambio automático cuando la app está en segundo plano.
  useEffect(() => {
    const suscripcion = AppState.addEventListener(
      'change',
      (estado) => {
        setAplicacionActiva(estado === 'active');
      },
    );

    return () => suscripcion.remove();
  }, []);

  // Cambiar de tarjeta automáticamente.
  useEffect(() => {
    if (
      anchoGaleria <= 0 ||
      contenido.artes.length < 2 ||
      !pantallaActiva ||
      !aplicacionActiva ||
      arrastrando
    ) {
      return;
    }

    const temporizador = setInterval(() => {
      if (!carruselRef.current) return;

      const siguiente =
        (indiceRef.current + 1) % contenido.artes.length;

      indiceRef.current = siguiente;
      setIndiceActivo(siguiente);

      carruselRef.current.scrollTo({
        x: siguiente * anchoGaleria,
        y: 0,
        animated: true,
      });
    }, TIEMPO_CAMBIO);

    return () => clearInterval(temporizador);
  }, [
    anchoGaleria,
    pantallaActiva,
    aplicacionActiva,
    arrastrando,
  ]);

  // Mantener alineada la tarjeta si cambia el ancho de pantalla.
  useEffect(() => {
    if (anchoGaleria <= 0) return;

    const cuadro = requestAnimationFrame(() => {
      carruselRef.current?.scrollTo({
        x: indiceRef.current * anchoGaleria,
        y: 0,
        animated: false,
      });
    });

    return () => cancelAnimationFrame(cuadro);
  }, [anchoGaleria]);

  function actualizarIndice(desplazamiento: number) {
    if (anchoGaleria <= 0 || contenido.artes.length === 0) return;

    const nuevoIndice = Math.max(
      0,
      Math.min(
        contenido.artes.length - 1,
        Math.round(desplazamiento / anchoGaleria),
      ),
    );

    indiceRef.current = nuevoIndice;
    setIndiceActivo(nuevoIndice);
  }

  async function abrirEnlace(url: string | null) {
    if (!url) return;

    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert(
        'No se pudo abrir el enlace',
        'Inténtalo de nuevo más tarde.',
      );
    }
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

        <Text style={styles.headerTitle}>PC Y EXTRAS</Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.page}>
          {/* Introducción */}
          <View style={styles.section}>
            <Text style={[styles.pageTitle, fuenteTitulo]}>
              Versión PC y extras
            </Text>

            <Text style={styles.description}>
              Información de la versión para PC y una mirada al
              mundo de LAB OF MUTANT.
            </Text>
          </View>

          {/* Sistema */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, fuenteTitulo]}>
              Requisitos del sistema
            </Text>

            <Container style={styles.panel}>
              <View style={styles.systemRow}>
                <View style={styles.features}>
                  {caracteristicas.map(({ texto, Icono }) => (
                    <View key={texto} style={styles.feature}>
                      <View style={styles.iconoCaracteristica}>
                        <Icono size={22} color="#B8B8B8" />
                      </View>

                      <Text style={styles.featureText}>
                        {texto}
                      </Text>
                    </View>
                  ))}
                </View>

                <View style={styles.statusColumn}>
                  <View style={styles.statusBadge}>
                    <Info size={18} color="#C8C8C8" />

                    <Text style={styles.statusText}>
                      En desarrollo
                    </Text>
                  </View>

                  <Text style={styles.textoEstado}>
                    La versión para PC de LAB OF MUTANT se
                    encuentra en desarrollo.
                  </Text>
                </View>
              </View>

              {contenido.requisitos.length > 0 ? (
                <View style={styles.requirements}>
                  {contenido.requisitos.map((requisito) => (
                    <View
                      key={requisito.nombre}
                      style={styles.requirementRow}
                    >
                      <Text style={styles.requirementName}>
                        {requisito.nombre}
                      </Text>

                      <Text style={styles.description}>
                        {requisito.valor}
                      </Text>
                    </View>
                  ))}
                </View>
              ) : (
                <Text style={styles.avisoRequisitos}>
                  Requisitos técnicos por confirmar.
                </Text>
              )}
            </Container>

            <View style={styles.bloqueEnlace}>
              <Pressable
                accessibilityRole="link"
                accessibilityState={{
                  disabled: !contenido.juegoUrl,
                }}
                disabled={!contenido.juegoUrl}
                onPress={() => abrirEnlace(contenido.juegoUrl)}
                style={({ pressed }) => [
                  styles.gameButton,
                  !contenido.juegoUrl && styles.disabled,
                  pressed && styles.pressed,
                ]}
              >
                <Text style={styles.gameButtonText}>
                  Prueba LAB OF MUTANT
                </Text>

                <ExternalLink size={22} color="#FFFFFF" />
              </Pressable>

              {!contenido.juegoUrl && (
                <Text style={styles.pendingText}>
                  Enlace disponible próximamente.
                </Text>
              )}
            </View>
          </View>

          {/* Tráiler */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, fuenteTitulo]}>
              Tráiler
            </Text>

            <Container style={styles.mediaContainer}>
              <Pressable
                accessibilityRole="link"
                accessibilityLabel={
                  contenido.trailerUrl
                    ? 'Abrir tráiler'
                    : 'Tráiler próximamente'
                }
                accessibilityState={{
                  disabled: !contenido.trailerUrl,
                }}
                disabled={!contenido.trailerUrl}
                onPress={() => abrirEnlace(contenido.trailerUrl)}
                style={({ pressed }) => [
                  styles.trailer,
                  pressed && styles.pressed,
                ]}
              >
                {contenido.trailerImagen && (
                  <Image
                    source={contenido.trailerImagen}
                    style={styles.mediaImage}
                    resizeMode="cover"
                  />
                )}

                <View style={styles.playCircle}>
                  <Play size={30} color="#FFFFFF" />
                </View>

                <View style={styles.mediaBadge}>
                  <Text style={styles.mediaBadgeText}>
                    {contenido.trailerUrl
                      ? 'Ver tráiler'
                      : 'Tráiler en camino...'}
                  </Text>
                </View>
              </Pressable>
            </Container>
          </View>

          {/* Arte conceptual */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, fuenteTitulo]}>
              Arte conceptual
            </Text>

            <Text style={styles.description}>
              Escenarios y atmósferas de LAB OF MUTANT
            </Text>

            <View
              style={styles.contenedorGaleria}
              onLayout={(evento) => {
                setAnchoGaleria(
                  evento.nativeEvent.layout.width,
                );
              }}
            >
              {anchoGaleria > 0 && (
                <ScrollView
                  ref={carruselRef}
                  horizontal
                  pagingEnabled
                  bounces={false}
                  showsHorizontalScrollIndicator={false}
                  onScrollBeginDrag={() => setArrastrando(true)}
                  onScrollEndDrag={(evento) => {
                    actualizarIndice(
                      evento.nativeEvent.contentOffset.x,
                    );
                    setArrastrando(false);
                  }}
                  onMomentumScrollEnd={(evento) => {
                    actualizarIndice(
                      evento.nativeEvent.contentOffset.x,
                    );
                  }}
                >
                  {contenido.artes.map((arte) => (
                    <View
                      key={arte.id}
                      style={{ width: anchoGaleria }}
                    >
                      <Container style={styles.artCard}>
                        {arte.imagen ? (
                          <Image
                            source={arte.imagen}
                            accessibilityLabel={arte.titulo}
                            style={styles.mediaImage}
                            resizeMode="cover"
                          />
                        ) : (
                          <View style={styles.artPlaceholder}>
                            <ImageIcon
                              size={40}
                              color="#687780"
                            />

                            <Text style={styles.pendingText}>
                              Imagen próximamente
                            </Text>
                          </View>
                        )}

                        <View style={styles.mediaBadge}>
                          <Text style={styles.mediaBadgeText}>
                            {arte.titulo}
                          </Text>
                        </View>
                      </Container>
                    </View>
                  ))}
                </ScrollView>
              )}
            </View>

            <View
              style={styles.indicadores}
              accessible
              accessibilityLabel={
                contenido.artes.length > 0
                  ? `Imagen ${indiceActivo + 1} de ${contenido.artes.length}`
                  : 'Sin imágenes'
              }
            >
              {contenido.artes.map((arte, indice) => (
                <View
                  key={arte.id}
                  style={[
                    styles.indicador,
                    indice === indiceActivo &&
                      styles.indicadorActivo,
                  ]}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
import { CinzelDecorative_700Bold } from '@expo-google-fonts/cinzel-decorative/700Bold';
import { useIsFocused } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import {
    ArrowLeft,
    ArrowRight,
    Pause,
    Play,
    X,
} from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import {
    AppState,
    Modal,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from '../../components/container/container';
import type { RootStackParamList } from '../../navigation/types';
import { styles } from './stylescontexto';

type Props = NativeStackScreenProps<RootStackParamList, 'Historia'>;

const personajes = [
  {
    id: '01',
    nombre: 'El padre',
    titulo: 'EL\nPADRE',
    descripcion:
      'Decidido a salvar a su hijo, se adentra en el bosque en busca de respuestas.',
    detalle:
      'Tras aceptar un tratamiento experimental para su hijo, deberá explorar las cabañas y el laboratorio para descubrir qué ocurrió y cómo recuperarlo.',
  },
  {
    id: '02',
    nombre: 'El hijo',
    titulo: 'EL\nHIJO',
    descripcion:
      'Un tratamiento experimental cambia su destino y el de su padre.',
    detalle:
      'Su enfermedad llevó a su padre a buscar una última oportunidad. Después del experimento, descubrir qué le sucedió se convierte en el centro de la búsqueda.',
  },
  {
    id: '03',
    nombre: 'El científico',
    titulo: 'EL\nCIENTÍFICO',
    descripcion:
      'La promesa de una cura conduce a un experimento de consecuencias inesperadas.',
    detalle:
      'Es el responsable del tratamiento experimental. Encontrarlo será fundamental para conocer la verdad sobre lo sucedido.',
  },
];

type Personaje = (typeof personajes)[number];

const SEPARACION = 16;
const TIEMPO_CAMBIO = 5000;

export default function Contexto({ navigation }: Props) {
  const [fontsLoaded, fontError] = useFonts({
    CinzelDecorative_700Bold,
  });

  const carruselRef = useRef<ScrollView>(null);
  const indiceRef = useRef(0);

  const [anchoCarrusel, setAnchoCarrusel] = useState(0);
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [arrastrando, setArrastrando] = useState(false);

  const [aplicacionActiva, setAplicacionActiva] = useState(
    AppState.currentState === null ||
      AppState.currentState === 'active',
  );

  const [personajeSeleccionado, setPersonajeSeleccionado] =
    useState<Personaje | null>(null);

  const pantallaActiva = useIsFocused();

  // Pausa el carrusel cuando la aplicación pasa a segundo plano.
  useEffect(() => {
    const suscripcion = AppState.addEventListener('change', (estado) => {
      setAplicacionActiva(estado === 'active');
    });

    return () => suscripcion.remove();
  }, []);

  // Conserva la posición al cambiar el ancho disponible.
  useEffect(() => {
    if (anchoCarrusel <= 0) return;

    carruselRef.current?.scrollTo({
      x: indiceRef.current * (anchoCarrusel + SEPARACION),
      y: 0,
      animated: false,
    });
  }, [anchoCarrusel]);

  // Avance automático: actualiza el índice antes de desplazar.
  useEffect(() => {
    if (
      anchoCarrusel <= 0 ||
      pausado ||
      arrastrando ||
      personajeSeleccionado !== null ||
      !pantallaActiva ||
      !aplicacionActiva
    ) {
      return;
    }

    const temporizador = setInterval(() => {
      if (!carruselRef.current) return;

      const siguiente = (indiceRef.current + 1) % personajes.length;

      indiceRef.current = siguiente;
      setIndiceActivo(siguiente);

      carruselRef.current.scrollTo({
        x: siguiente * (anchoCarrusel + SEPARACION),
        y: 0,
        animated: true,
      });
    }, TIEMPO_CAMBIO);

    return () => clearInterval(temporizador);
  }, [
    anchoCarrusel,
    pausado,
    arrastrando,
    personajeSeleccionado,
    pantallaActiva,
    aplicacionActiva,
  ]);

  function actualizarIndice(posicionX: number) {
    if (anchoCarrusel <= 0) return;

    const nuevoIndice = Math.max(
      0,
      Math.min(
        personajes.length - 1,
        Math.round(posicionX / (anchoCarrusel + SEPARACION)),
      ),
    );

    indiceRef.current = nuevoIndice;
    setIndiceActivo(nuevoIndice);
  }

  function cerrarFicha() {
    setPersonajeSeleccionado(null);
  }

  if (!fontsLoaded && !fontError) {
    return <View style={styles.screen} />;
  }

  const titleFont = fontsLoaded ? styles.decorativeFont : undefined;

  return (
    <SafeAreaView style={styles.screen}>
      {/* Encabezado */}
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
          <ArrowLeft size={25} color="#FFFFFF" />
        </Pressable>

        <Text style={styles.headerTitle}>HISTORIA</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.page}>
          <View style={styles.section}>
            <Text style={[styles.pageTitle, titleFont]}>
              Historia y personajes
            </Text>

            <Text style={styles.description}>
              Conoce la historia y a los personajes que navegan en ella.
            </Text>
          </View>

          {/* Espacio para una futura imagen */}
          <Container style={styles.imageSpace}>
            <View />
          </Container>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, titleFont]}>
              Una última esperanza.
            </Text>

            <Text style={styles.description}>
              Un padre acepta un tratamiento experimental para salvar
              a su hijo. Pero algo sale mal. Ahora, entre cabañas y un
              laboratorio oculto en el bosque, deberá descubrir qué
              ocurrió y si aún es posible recuperarlo.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, titleFont]}>
              Personajes
            </Text>

            <Text style={styles.description}>
              Toda búsqueda tiene un rostro.
            </Text>
          </View>

          {/* Carrusel de personajes */}
          <View
            style={styles.contenedorCarrusel}
            onLayout={(evento) => {
              setAnchoCarrusel(evento.nativeEvent.layout.width);
            }}
          >
            {anchoCarrusel > 0 && (
              <ScrollView
                ref={carruselRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={anchoCarrusel + SEPARACION}
                snapToAlignment="start"
                decelerationRate="fast"
                disableIntervalMomentum
                contentContainerStyle={styles.characters}
                onScrollBeginDrag={() => {
                  setArrastrando(true);
                }}
                onScrollEndDrag={(evento) => {
                  actualizarIndice(evento.nativeEvent.contentOffset.x);
                  setArrastrando(false);
                }}
                onMomentumScrollEnd={(evento) => {
                  actualizarIndice(evento.nativeEvent.contentOffset.x);
                }}
              >
                {personajes.map((personaje) => (
                  <Container
                    key={personaje.id}
                    style={[
                      styles.characterCard,
                      { width: anchoCarrusel },
                    ]}
                  >
                    <View style={styles.characterTop}>
                      <View style={styles.numberBadge}>
                        <Text style={[styles.numberText, titleFont]}>
                          {personaje.id}
                        </Text>
                      </View>

                      <View style={styles.verticalLine} />
                    </View>

                    <View style={styles.characterInfo}>
                      <Text
                        style={[styles.characterName, titleFont]}
                        adjustsFontSizeToFit
                        numberOfLines={2}
                      >
                        {personaje.titulo}
                      </Text>

                      <Text style={styles.characterDescription}>
                        {personaje.descripcion}
                      </Text>

                      <Pressable
                        accessibilityRole="button"
                        accessibilityLabel={`Conocer a ${personaje.nombre}`}
                        onPress={() =>
                          setPersonajeSeleccionado(personaje)
                        }
                        style={({ pressed }) => [
                          styles.characterLink,
                          pressed && styles.pressed,
                        ]}
                      >
                        <Text style={styles.linkText}>
                          Conocer al personaje
                        </Text>

                        <ArrowRight size={23} color="#FFFFFF" />
                      </Pressable>
                    </View>
                  </Container>
                ))}
              </ScrollView>
            )}

            <View style={styles.controlesCarrusel}>
              <View style={styles.indicadores}>
                {personajes.map((personaje, indice) => (
                  <View
                    key={personaje.id}
                    style={[
                      styles.indicador,
                      indice === indiceActivo &&
                        styles.indicadorActivo,
                    ]}
                  />
                ))}

                <Text style={styles.contador}>
                  {indiceActivo + 1} / {personajes.length}
                </Text>
              </View>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel={
                  pausado
                    ? 'Reanudar cambio automático'
                    : 'Pausar cambio automático'
                }
                onPress={() => setPausado((actual) => !actual)}
                style={({ pressed }) => [
                  styles.botonPausa,
                  pressed && styles.pressed,
                ]}
              >
                {pausado ? (
                  <Play size={16} color="#B8C7D0" />
                ) : (
                  <Pause size={16} color="#B8C7D0" />
                )}

                <Text style={styles.textoPausa}>
                  {pausado ? 'Reanudar' : 'Pausar'}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Ficha personalizada del personaje */}
      <Modal
        visible={personajeSeleccionado !== null}
        transparent
        animationType="fade"
        onRequestClose={cerrarFicha}
      >
        <SafeAreaView style={styles.capaModal}>
          <Pressable
            style={styles.fondoModal}
            accessibilityRole="button"
            accessibilityLabel="Cerrar ficha"
            onPress={cerrarFicha}
          />

          {personajeSeleccionado && (
            <View
              style={styles.ventanaModal}
              accessibilityViewIsModal
            >
              <View style={styles.encabezadoModal}>
                <View style={styles.identificadorModal}>
                  <View style={styles.acentoModal} />

                  <Text style={styles.etiquetaModal}>
                    EXPEDIENTE {personajeSeleccionado.id}
                  </Text>
                </View>

                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Cerrar"
                  onPress={cerrarFicha}
                  style={({ pressed }) => [
                    styles.botonCerrar,
                    pressed && styles.pressed,
                  ]}
                >
                  <X size={22} color="#FFFFFF" />
                </Pressable>
              </View>

              <ScrollView
                style={styles.scrollModal}
                contentContainerStyle={styles.contenidoModal}
                showsVerticalScrollIndicator={false}
              >
                <Text style={styles.categoriaModal}>PERSONAJE</Text>

                <Text style={[styles.nombreModal, titleFont]}>
                  {personajeSeleccionado.nombre}
                </Text>

                <Text style={styles.resumenModal}>
                  {personajeSeleccionado.descripcion}
                </Text>

                <View style={styles.divisorModal} />

                <Text style={styles.subtituloModal}>SU HISTORIA</Text>

                <Text style={styles.detalleModal}>
                  {personajeSeleccionado.detalle}
                </Text>
              </ScrollView>

              <Pressable
                accessibilityRole="button"
                onPress={cerrarFicha}
                style={({ pressed }) => [
                  styles.botonVolver,
                  pressed && styles.pressed,
                ]}
              >
                <Text style={styles.textoVolver}>
                  Volver a los personajes
                </Text>

                <ArrowRight size={20} color="#FFFFFF" />
              </Pressable>
            </View>
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
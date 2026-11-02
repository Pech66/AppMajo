import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#050707',
  },

  decorativeFont: {
    fontFamily: 'CinzelDecorative_700Bold',
  },

  header: {
    minHeight: 56,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: 48,
    height: 48,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  headerSpacer: {
    width: 48,
    flexShrink: 0,
  },

  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 32,
  },

  page: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 24,
  },

  section: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 12,
  },

  pageTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    flexShrink: 1,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    flexShrink: 1,
  },

  description: {
    width: '100%',
    color: '#AEAEAE',
    fontSize: 15,
    lineHeight: 24,
  },

  imageSpace: {
    width: '100%',
    aspectRatio: 2.4,
    padding: 0,
    gap: 0,
    backgroundColor: '#111A20',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#282E31',
    overflow: 'hidden',
  },

  // Carrusel
  contenedorCarrusel: {
    width: '100%',
  },

  characters: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 16,
  },

  characterCard: {
    minHeight: 490,
    flexGrow: 0,
    flexShrink: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: 22,
    gap: 32,
    backgroundColor: '#10191F',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#293942',
    overflow: 'hidden',
  },

  characterTop: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 14,
  },

  numberBadge: {
    minWidth: 40,
    minHeight: 40,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#70828E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },

  verticalLine: {
    width: 1,
    height: 100,
    backgroundColor: '#526976',
  },

  characterInfo: {
    width: '100%',
    minWidth: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 20,
  },

  characterName: {
    width: '100%',
    color: '#FFFFFF',
    fontSize: 44,
  },

  characterDescription: {
    width: '100%',
    color: '#C0C0C0',
    fontSize: 16,
    lineHeight: 25,
  },

  characterLink: {
    width: '100%',
    minHeight: 52,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  linkText: {
    flex: 1,
    minWidth: 0,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },

  controlesCarrusel: {
    minHeight: 48,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  indicadores: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  indicador: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#34414A',
  },

  indicadorActivo: {
    width: 26,
    backgroundColor: '#258CB5',
  },

  contador: {
    marginLeft: 6,
    color: '#879BA8',
    fontSize: 12,
  },

  botonPausa: {
    minHeight: 44,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  textoPausa: {
    color: '#B8C7D0',
    fontSize: 12,
  },

  // Ventana del personaje
  capaModal: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  fondoModal: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },

  ventanaModal: {
    width: '100%',
    maxWidth: 480,
    maxHeight: '85%',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 18,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#315266',
    backgroundColor: '#0D171E',
    overflow: 'hidden',
  },

  encabezadoModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  identificadorModal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  acentoModal: {
    width: 3,
    height: 24,
    borderRadius: 2,
    backgroundColor: '#309AC1',
  },

  etiquetaModal: {
    flex: 1,
    color: '#91AAB9',
    fontSize: 11,
    lineHeight: 17,
    letterSpacing: 1.5,
  },

  botonCerrar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1B2A34',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollModal: {
    flexGrow: 0,
    flexShrink: 1,
  },

  contenidoModal: {
    paddingBottom: 10,
    gap: 16,
  },

  categoriaModal: {
    color: '#6F95AB',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },

  nombreModal: {
    color: '#FFFFFF',
    fontSize: 32,
  },

  resumenModal: {
    color: '#CBD6DD',
    fontSize: 16,
    lineHeight: 25,
  },

  divisorModal: {
    height: 1,
    marginVertical: 6,
    backgroundColor: '#2A3C48',
  },

  subtituloModal: {
    color: '#79ACC6',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },

  detalleModal: {
    color: '#AEBEC8',
    fontSize: 15,
    lineHeight: 25,
  },

  botonVolver: {
    minHeight: 52,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#125574',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  textoVolver: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  pressed: {
    opacity: 0.7,
  },
});
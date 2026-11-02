import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#050707',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 34,
    paddingBottom: 32,
  },

  page: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    gap: 24,
  },

  decorativeFont: {
    fontFamily: 'CinzelDecorative_700Bold',
  },

  pageTitle: {
    width: '100%',
    color: '#FFFFFF',
    fontSize: 38,
    textAlign: 'center',
    marginBottom: 4,
  },

  // Sobrescribe la distribución del Container compartido.
  card: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 0,
    gap: 0,
    backgroundColor: '#050707',
    borderWidth: 1,
    borderColor: '#282C2E',
    borderRadius: 10,
    overflow: 'hidden',
  },

  historyCard: {
    width: '100%',
    backgroundColor: '#0D151B',
  },

  historyContent: {
    width: '100%',
    minHeight: 240,
    padding: 18,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 64,
  },

  historyTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    flexShrink: 1,
  },

  historyBottom: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },

  description: {
    flex: 1,
    minWidth: 0,
    color: '#B8BABC',
    fontSize: 14,
    lineHeight: 21,
  },

  circle: {
    width: 46,
    height: 46,
    flexShrink: 0,
    borderRadius: 23,
    backgroundColor: '#075579',
    alignItems: 'center',
    justifyContent: 'center',
  },

  grid: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 12,
  },

  smallCard: {
    flex: 1,
    minWidth: 0,
  },

  tarjetaPersonajes: {
    backgroundColor: '#0D151B',
  },

  smallContent: {
    width: '100%',
    flexGrow: 1,
    minHeight: 158,
    padding: 14,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 28,
  },

  iconRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },

  textGroup: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8,
  },

  cardTitle: {
    color: '#F4F4F4',
    fontSize: 21,
    flexShrink: 1,
  },

  smallDescription: {
    color: '#B0B2B3',
    fontSize: 13,
    lineHeight: 20,
  },

  filaEnlace: {
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  filaExtras: {
    minHeight: 128,
  },

  filaRequisitos: {
    minHeight: 82,
  },

  iconoEnlace: {
    width: 28,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contenidoEnlace: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8,
  },

  tituloEnlace: {
    color: '#F4F4F4',
    fontSize: 22,
    flexShrink: 1,
  },

  descripcionEnlace: {
    color: '#B0B2B3',
    fontSize: 14,
    lineHeight: 21,
  },

  flechaEnlace: {
    width: 20,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pressed: {
    opacity: 0.7,
  },
});
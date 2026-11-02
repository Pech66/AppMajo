import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#080D12',
  },

  scroll: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 24,
    alignItems: 'center',
  },

  decorativeFont: {
    fontFamily: 'CinzelDecorative_700Bold',
  },

  header: {
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center',
    alignItems: 'center',
  },

  title: {
    width: '100%',
    color: '#FFFFFF',
    fontSize: 82,
    textAlign: 'center',
  },

  espacioCentral: {
    flexGrow: 1,
    minHeight: 140,
  },

  footer: {
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 16,
  },

  description: {
    paddingHorizontal: 6,
    color: '#E0E0E0',
    fontSize: 14,
    lineHeight: 23,
    textAlign: 'center',
  },

  gameName: {
    color: '#FFFFFF',
    fontSize: 13,
  },

  botonExplorar: {
    width: '100%',
    minHeight: 58,
    paddingHorizontal: 24,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
  },

  textoBoton: {
    flexShrink: 1,
    color: '#111111',
    fontSize: 23,
    lineHeight: 30,
    textAlign: 'center',
  },

  botonPresionado: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});
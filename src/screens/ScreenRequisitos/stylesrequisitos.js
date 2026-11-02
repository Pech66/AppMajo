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
    paddingHorizontal: 10,
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
    minWidth: 0,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },

  headerSpacer: {
    width: 48,
    flexShrink: 0,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 40,
  },

  page: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 34,
  },

  section: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 16,
  },

  pageTitle: {
    color: '#F4F4F4',
    fontSize: 25,
    flexShrink: 1,
  },

  sectionTitle: {
    color: '#F4F4F4',
    fontSize: 21,
    flexShrink: 1,
  },

  description: {
    color: '#B4B4B4',
    fontSize: 14,
    lineHeight: 22,
    flexShrink: 1,
  },

  panel: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 16,
    gap: 18,
    backgroundColor: '#070909',
    borderWidth: 1,
    borderColor: '#282B2C',
    borderRadius: 11,
  },

  systemRow: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    gap: 16,
  },

  features: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 128,
    minWidth: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 14,
  },

  feature: {
    width: '100%',
    minHeight: 28,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  iconoCaracteristica: {
    width: 23,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  featureText: {
    flex: 1,
    minWidth: 0,
    color: '#BCBCBC',
    fontSize: 13,
    lineHeight: 20,
  },

  statusColumn: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 136,
    minWidth: 0,
    paddingLeft: 14,
    borderLeftWidth: 1,
    borderLeftColor: '#555B5D',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 12,
  },

  statusBadge: {
    width: '100%',
    minHeight: 35,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#232525',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  statusText: {
    flex: 1,
    minWidth: 0,
    color: '#EEEEEE',
    fontSize: 12,
    lineHeight: 18,
  },

  textoEstado: {
    color: '#B4B4B4',
    fontSize: 13,
    lineHeight: 20,
  },

  requirements: {
    width: '100%',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#282B2C',
    flexDirection: 'column',
    gap: 16,
  },

  requirementRow: {
    width: '100%',
    flexDirection: 'column',
    gap: 6,
  },

  requirementName: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 20,
  },

  avisoRequisitos: {
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#282B2C',
    color: '#929B9F',
    fontSize: 12,
    lineHeight: 18,
  },

  pendingText: {
    color: '#929B9F',
    fontSize: 12,
    lineHeight: 19,
  },

  bloqueEnlace: {
    width: '100%',
    marginTop: 8,
    gap: 10,
  },

  gameButton: {
    width: '100%',
    minHeight: 56,
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderRadius: 7,
    backgroundColor: '#07577B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },

  gameButtonText: {
    flex: 1,
    minWidth: 0,
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 23,
  },

  mediaContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 0,
    gap: 0,
    backgroundColor: '#111A20',
    borderWidth: 1,
    borderColor: '#252828',
    borderRadius: 10,
    overflow: 'hidden',
  },

  trailer: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1.9,
    minHeight: 175,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mediaImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },

  playCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mediaBadge: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    maxWidth: '85%',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
  },

  mediaBadgeText: {
    color: '#DEDEDE',
    fontSize: 11,
    lineHeight: 17,
  },

  contenedorGaleria: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },

  artCard: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1.12,
    flexGrow: 0,
    flexShrink: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 0,
    gap: 0,
    backgroundColor: '#111A20',
    borderWidth: 1,
    borderColor: '#252828',
    borderRadius: 12,
    overflow: 'hidden',
  },

  artPlaceholder: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },

  indicadores: {
    minHeight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  indicador: {
    width: 20,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#303436',
  },

  indicadorActivo: {
    width: 28,
    backgroundColor: '#08749C',
  },

  disabled: {
    opacity: 0.65,
  },

  pressed: {
    opacity: 0.75,
  },
});
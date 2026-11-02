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
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },

  headerSpacer: {
    width: 48,
    flexShrink: 0,
  },

  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 48,
  },

  page: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 36,
  },

  section: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 16,
  },

  pageTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    flexShrink: 1,
  },

  description: {
    color: '#B5B5B5',
    fontSize: 14,
    lineHeight: 23,
  },

  eyebrow: {
    color: '#AAAAAA',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.5,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    flexShrink: 1,
  },

  categoryTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    flexShrink: 1,
  },

  panel: {
    width: '100%',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 0,
    gap: 0,
    backgroundColor: '#070909',
    borderWidth: 1,
    borderColor: '#252828',
    borderRadius: 14,
    overflow: 'hidden',
  },

  panelHeader: {
    width: '100%',
    minHeight: 76,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 14,
  },

  iconBox: {
    width: 36,
    height: 36,
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: '#232525',
    alignItems: 'center',
    justifyContent: 'center',
  },

  panelTitle: {
    flex: 1,
    minWidth: 0,
    color: '#D0D0D0',
    fontSize: 15,
    lineHeight: 22,
  },

  table: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 14,
  },

  tableHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#252828',
  },

  columnLabel: {
    color: '#AAAAAA',
    fontSize: 12,
    lineHeight: 18,
  },

  keysColumn: {
    width: '46%',
    flexShrink: 0,
    paddingRight: 12,
  },

  actionColumn: {
    flex: 1,
    minWidth: 0,
  },

  tableRow: {
    width: '100%',
    minHeight: 62,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#252828',
  },

  lastRow: {
    borderBottomWidth: 0,
  },

  keys: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 6,
  },

  keyBadge: {
    minWidth: 24,
    minHeight: 32,
    maxWidth: '100%',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 6,
    backgroundColor: '#232525',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  keyText: {
    flexShrink: 1,
    color: '#EEEEEE',
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
  },

  actionText: {
    color: '#B5B5B5',
    fontSize: 13,
    lineHeight: 21,
  },

  panelDescription: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
    color: '#B5B5B5',
    fontSize: 14,
    lineHeight: 24,
  },

  pressed: {
    opacity: 0.7,
  },
});
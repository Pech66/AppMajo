import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        minHeight: 40,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#dee3e8',
    },

    content: {
        flex: 1,
    },

    title: {
        marginTop: 4,
        fontSize: 14,
        color: '#666',
    },

    subtitle: {
        marginTop: 2,
        fontSize: 12,
        color: '#888',
    },

    pressed: { 
        opacity: 0.5,
    },

    disabled: {
        opacity: 0.5,
    },
})
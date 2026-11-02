import type { ReactNode } from 'react';
import { View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { styles } from './stylescontainer';


type Opciones = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};



export function Container({
    children,
    style,
}: Opciones) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
}

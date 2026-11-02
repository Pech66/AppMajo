import { Pressable, Text, View } from "react-native";
import { styles } from "./stylesbutton";


type Options = {
        title: string;
        subtitle?: string;
        leftIcon?: React.ReactNode;
        rightIcon?: React.ReactNode;
        onPress?: () => void;
        disabled?: boolean;
}

export function ButtonOptions({
        title,
        subtitle,
        leftIcon,
        rightIcon,
        onPress,
        disabled = false,
}: Options) {
        return (
        <Pressable
                onPress={onPress}
                disabled={disabled}
                accessibilityRole="button"
                accessibilityState={{ disabled }}
                style={({ pressed }) => [
                        styles.button,
                        pressed && styles.pressed,
                        disabled && styles.disabled,
                ]}
        >
                {leftIcon}

                <View style={styles.content}>
                        <Text style={styles.title}>{title}</Text>

                        {subtitle ? (
                                <Text style= {styles.subtitle}>{subtitle}</Text>
                        ) : null}
                </View>

                {rightIcon}
        </Pressable>
        );

}


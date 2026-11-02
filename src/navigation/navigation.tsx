import {
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import type { RootStackParamList } from './types';

import Protector from '../screens/ScreenProtector/protecto';
import Inicio from '../screens/ScreenInicio/inicio';
import Contexto from '../screens/ScreenContexto/contexto';
import controlesScreen from '../screens/ScreendControles/controles';
import Requisitos from '../screens/ScreenRequisitos/requisitos';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#050707',
            },
          }}
        >
          <Stack.Screen
            name="Inicio"
            component={Protector}
          />

          <Stack.Screen
            name="Explorar"
            component={Inicio}
            options={{
              headerShown: true,
              title: 'Explorar',
              headerStyle: {
                backgroundColor: '#050707',
              },
              headerTintColor: '#FFFFFF',
              headerShadowVisible: false,
            }}
          />

          <Stack.Screen
            name="Historia"
            component={Contexto}
          />

          <Stack.Screen
            name="Guia"
            component={controlesScreen}
          />

          <Stack.Screen
            name="PcExtras"
            component={Requisitos}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
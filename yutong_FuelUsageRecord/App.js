import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import FuelListScreen from './screens/FuelListScreen';
import CreateListScreen from './screens/CreateListScreen';
import fuelReducer from './store/feul-reducer';

const Stack = createNativeStackNavigator();
const rootReducer = combineReducers({
  fuel: fuelReducer,
})

const store = createStore(rootReducer);

 function AppNavigator() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          options={{ headerShown: false }} 
          name="Login" 
          component={LoginScreen} />
          <Stack.Screen 
          name="FuelList" 
          component={FuelListScreen} />
          <Stack.Screen 
          name="CreateList" 
          component={CreateListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppNavigator;

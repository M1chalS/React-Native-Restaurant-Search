import * as React from 'react';
import SearchScreen from "./src/screens/SearchScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{title: "Restaurant Search"}} name="Search" component={SearchScreen}/>
                <Stack.Screen options={{title: "Restaurant Info"}} name="Show" component={ResultsShowScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
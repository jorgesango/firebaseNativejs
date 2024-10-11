import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { View, Text, Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="NavRoot"
                    component={NavRoot}
                />
                <Stack.Screen
                    name="NavExample1"
                    component={NavExample1}
                />
                <Stack.Screen
                    name="NavExample2"
                    component={NavExample2}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function NavRoot({navigation} : any) {
    return (
        <View>
            <Text>Hi from the navigation!</Text>
            <Button
                title="Example 1"
                onPress={() => {
                    navigation.navigate("NavExample1");
                }}
            />
            <Button
                title="Example 2"
                onPress={() => {
                    navigation.navigate("NavExample2", {data: "SOME IMPORTANT AND RELEVANT INFO"});
                }}
            />
        </View>
    );
}

function NavExample1() {
    return (
        <View>
            <Text>Nav example 1</Text>
        </View>
    );
}

function NavExample2({navigation, route} : any) {
    return (
        <View>
            <Text>Nav example 2. Some data: {route.params.data}</Text>
        </View>
    );
}
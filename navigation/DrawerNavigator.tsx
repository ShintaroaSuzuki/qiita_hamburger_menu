import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';
import { DrawerScreen1, DrawerScreen2, DrawerScreen3 } from '../screens';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            initialRouteName="Drawer1"
            screenOptions={{ headerShown: false }}
            drawerStyle={{
                width: dimensions.width / 2,
                backgroundColor: '#132743',
                paddingTop: 40
            }}
            drawerContentOptions={{
                activeTintColor: '#edc988',
                activeBackgroundColor: undefined,
                inactiveTintColor: '#edc988'
            }}
        >
            <Drawer.Screen
                name="Drawer1"
                component={DrawerScreen1}
                options={{ title: 'タブ1' }}
            />
            <Drawer.Screen
                name="Drawer2"
                component={DrawerScreen2}
                options={{ title: 'タブ2' }}
            />
            <Drawer.Screen
                name="Drawer3"
                component={DrawerScreen3}
                options={{ title: 'タブ3' }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

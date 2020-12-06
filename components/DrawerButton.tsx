import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';

type Props = {
    navigation: DrawerNavigationProp<DrawerParamList>;
};

export const DrawerButton: React.FC<Props> = ({ navigation }: Props) => {
    return (
        <TouchableOpacity
            style={styles.hamburgerMenu}
            onPress={() => {
                navigation.openDrawer();
            }}
        >
            {[...Array(3)].map((_, index) => {
                return (
                    <View
                        key={`bar_${index}`}
                        style={styles.hamburgerMenuBar}
                    />
                );
            })}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    hamburgerMenu: {
        width: 30,
        height: 25,
        position: 'absolute',
        top: 70,
        left: 30
    },
    hamburgerMenuBar: {
        width: 25,
        borderBottomWidth: 3,
        borderColor: '#EDC988',
        marginBottom: 7
    }
});

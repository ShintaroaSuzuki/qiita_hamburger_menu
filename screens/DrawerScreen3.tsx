import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { commonStyles } from '../styles/screenStyle';
import { DrawerButton } from '../components/DrawerButton';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../types';

type Props = {
    navigation: DrawerNavigationProp<DrawerParamList>;
};

export const Screen: React.FC<Props> = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <Text style={commonStyles.text}>Screen3</Text>
            <DrawerButton navigation={navigation} />
        </SafeAreaView>
    );
};

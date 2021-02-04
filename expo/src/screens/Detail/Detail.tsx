import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../types';

export default function Detail({ navigation }: StackScreenProps<RootStackParamList, "Detail">) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.push('Detail')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

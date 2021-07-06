import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, Button, NativeSyntheticEvent } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { atom, useRecoilState } from 'recoil';
import { RootStackParamList } from '../types';

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export default function Home({ navigation }: StackScreenProps<RootStackParamList, "Home">) {
    const [text, setText] = useState("");

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail')}
            />
            <TextInput onChangeText={setText} value={text} />
            <Text>{text}</Text>
        </View>
    );
}

import React from 'react';
import {View, Text, Image} from 'react-native';
import CardComponent from '../components/CardComponent';

export default function CharacterInfo({route}) {

    const { character } = route.params;

    return (
        <View>
            <CardComponent character={character}/>
        </View>
    )
}
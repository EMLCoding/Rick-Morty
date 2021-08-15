import React from 'react';
import { View, Text, Image } from 'react-native';

export default function CardComponent(props) {
    const { character } = props

    return (
        <View style={styles.container}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={[styles.text, styles.title]}>{character.name}</Text>
                
                <View style={styles.details}>
                    <View style={[styles.circle, character.status == 'Alive' ? styles.circleAlive : styles.circleDead]} />
                    <Text style={styles.text}>{character.status}</Text>
                    <Text style={styles.text}> - </Text>
                    <Text style={styles.text}>{character.species}</Text>
                </View>
                <Text style={[styles.text, styles.category]}>Origin:</Text>
                <Text style={[styles.text, {flexShrink: 1}]}>{character.origin.name}</Text>
                <Text style={[styles.text, styles.category]}>Location:</Text>
                <Text style={[styles.text, {flexShrink: 1}]}>{character.location.name}</Text>
            </View>
        </View>
    )
}

const styles = {
    container: {
        flexDirection: 'row',
        height: 180,
        margin: 12,
        marginBottom: 0,
        backgroundColor: '#646464',
        borderRadius: 20,
        overflow: 'hidden'
    },
    content: {
        paddingTop: 20
    },
    details: {
        flexDirection: 'row',
        top: 10,
        marginBottom: 20,
        alignItems: 'center'
    },
    image: {
        height: 180,
        width: 140,
        marginRight: 4
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        marginRight: '4%'
    },
    circleAlive: {
        backgroundColor: '#24CD26'
    },
    circleDead: {
        backgroundColor: '#CD2424'
    },
    text: {
        color: 'white'
    },
    title: {
        fontSize: 25,
        flexShrink: 1
    },
    category: {
        opacity: 0.6
    }
}
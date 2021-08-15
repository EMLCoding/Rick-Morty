import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
//import AsyncStorage from '@react-native-async-storage/async-storage';
import CardComponent from '../components/CardComponent';

export default function Characters({navigation}) {
    const [isLoading, setisLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [cargaLocal, setCargaLocal] = useState(false)

    NetInfo.fetch().then(state => {
        if (state.isConnected) {
            setCargaLocal(false)
        } else {
            setCargaLocal(true)
        }
    })

    const getCharacters = async () => {
        try {
            const response = await
                fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            const json = await response.json();
            setData([...data, ...json.results])
            storeLocalData(json.results)
        } catch (error) {
            console.error(error)
        } finally {
            setisLoading(false)
        }
        
    }

    
    const storeLocalData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@characters', jsonValue)
        } catch (eerror) {
            console.error(error)
        }
    }
    

    const getLocalData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@characters')
            jsonValue != null ? setData(JSON.parse(jsonValue)) : null;
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (cargaLocal === false) {
            getCharacters()
        } else {
            getLocalData()
        }
        
    }, [page])

    getMoreCharacters = () => {
        setPage(page + 1)
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>The Rick and Morty API</Text>
            </View>

            <View style={styles.content}>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        style={{ margin: 5 }}
                        data={data}
                        onEndReached={this.getMoreCharacters}
                        keyExtractor={({ id }, index) => id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {navigation.navigate('CharacterInfo', {
                                character: item
                            })}}>
                                <CardComponent character={item} />
                            </TouchableOpacity>
                            
                        )}
                    />
                )}
            </View>
        </View>
    )
}

const styles = {
    header: {
        backgroundColor: 'white',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    content: {
        backgroundColor: '#252525'
    }
}
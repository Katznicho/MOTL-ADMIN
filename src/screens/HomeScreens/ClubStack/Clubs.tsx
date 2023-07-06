import { StyleSheet, Text, View, SafeAreaView,  FlatList, Pressable, Image } from 'react-native'
import React, { useEffect } from 'react'
import { generalstyles } from '../../../generalstyles/generalstyles'
import firestore, { firebase } from '@react-native-firebase/firestore';
import { CLUBS } from '../../../constants/endpoints';
import { theme } from '../../../theme/theme';
import { ActivityIndicator } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Clubs = ({ navigation }: any) => {
    const [clubs, setClubs] = React.useState<any>([])
    const [loading, setLoading] = React.useState(false)

    const getClubs = async () => {
        try {
            setLoading(true)
            setClubs([])
            const clubs = await firestore().collection(CLUBS).get();
            for (const club of clubs.docs) {
                const clubData = club.data();
                clubData.id = club.id;
                const details = {
                    ...clubData,
                    clubId: club.id
                }
                setClubs((prev: any) => [...prev, details])
            }
            setLoading(false)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getClubs();
    }, [])

    return (
        <SafeAreaView style={[generalstyles.container]}>
            {/* clubs */}
            {loading ? (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color={theme.colors.primary} />

                </View>
            ) : clubs?.length == 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{color:theme.colors.primary , fontSize:20 , fontWeight:"bold"}}>No clubs yet</Text>
                </View>
            ) 
            : (
                <FlatList
                    data={clubs}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => String(item.id)}
                    contentContainerStyle={{
                        paddingHorizontal: 10
                        , marginBottom: 15,
                        marginTop: -2,
                        paddingBottom: 100
                    }}
                    renderItem={({ item, index }) => {
                        return <Pressable
                            style={styles.container}
                            key={index}
                            onPress={
                                () => navigation.navigate('ClubDetailScreen', {
                                    clubId: item.clubId
                                }
                                )
                            }

                        >

                            <View >
                                {/* icon */}
                                <Image
                                    source={{
                                        uri: item?.logo
                                    }}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 10,
                                    }}
                                />

                            </View>

                            <View style={{
                                flexDirection: 'column',
                                flex: 1,
                                marginHorizontal: 10,
                                marginTop: 10
                            }}>
                                {/* team name */}
                                <Text style={styles.date}>{item.name}</Text>
                                <Text style={styles.status}>{item.stadium}</Text>
                                <Text style={styles.mode}>{item.location}</Text>

                                {/* team name */}

                            </View>
                            <View style={{
                                flexDirection: 'column',
                            }}>
                                {/* amount details */}
                                <View>
                                    <Text style={styles.amount}>{
                                        item.manager

                                    }</Text>


                                </View>
                                {/* amoun details */}
                            </View>
                            <Pressable>
                                {/* add chevron icon */}
                                <Ionicons name="chevron-forward"
                                    size={24} color={theme.colors.primary} />
                                {/* icon */}

                            </Pressable>
                        </Pressable>
                    }}




                />
            )
            }
            {/* clubs */}
        </SafeAreaView>
    )
}

export default Clubs

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        borderRadius: 8,
        padding: 16,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    ugx: {
        fontSize: 14,
        color: "gray",
    },

    date: {
        fontSize: 16,
        color: theme.colors.primary,
    },
    status: {
        fontSize: 12,
        color: 'gray',
    },
    mode: {
        fontSize: 12,
        color: 'gray',
    },
})
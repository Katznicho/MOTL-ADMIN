import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { generalstyles } from '../../../generalstyles/generalstyles';
import { CLUBS, CLUB_PLAYERS, PLAYERS } from '../../../constants/endpoints';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { ActivityIndicator, Button, IconButton } from 'react-native-paper';
import { theme } from '../../../theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


const PlayerDetails = ({ navigation }: any) => {
    const { playerId , clubId } = useRoute<any>().params


    const [playerData, setPlayerData] = React.useState<any>([])

    const getClubData = async () => {
        // const clubDoc = await firestore().collection(CLUBS).doc(clubId).get();
        const playerDoc = await firestore().collection(CLUB_PLAYERS).doc(clubId).collection(PLAYERS).doc(playerId).get();
        

        if (playerDoc.exists) {
            const playerData = playerDoc.data();
            const details = {
                ...playerData,
                playerId:playerId,
                clubId
            }
            setPlayerData([details]);
            // Use clubData to display the club information on the page
        } else {
            // Handle the case when the club document does not exist
            Alert.alert('Club does not exist!');
        }
    };

    useEffect(() => {
        getClubData();
    }, []);



    return (
        <SafeAreaView style={[generalstyles.container]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                style={{
                    paddingBottom: 100
                }}
            >
                {
                    playerData.length > 0 ?
                        <View>
                            <ImageBackground
                                source={{ uri: playerData[0].profile_pic }}
                                style={{ width: '100%', height: 200 }}
                                

                            >
                                <View>
                                    <IconButton
                                        icon="chevron-left"
                                        iconColor={theme.colors.primary}
                                        size={28}
                                        onPress={() => navigation.goBack()}
                                        containerColor={theme.colors.arraowBackGroundColor}
                                    />
                                </View>
                            </ImageBackground>
                            {/* logo */}
                            <View style={[generalstyles.flexStyles, { justifyContent: "space-between", alignItems: "center" }]}>
                                <View style={{ marginTop: -50, alignItems: 'flex-start', marginLeft: 20 }}>
                                    <ImageBackground
                                        source={{ uri: playerData[0].profile_pic }}
                                        style={{ width: 100, height: 100 }}
                                        imageStyle={{ borderRadius: 50 }}
                                    >
                                    </ImageBackground>

                                </View>

                                <View>
                                    <Button

                                        mode="contained"
                                        contentStyle={{ flexDirection: 'row-reverse' }}

                                        buttonColor={theme.colors.buttonColor}
                                        textColor={theme.colors.primary}
                                        style={{ marginVertical: 5 }}


                                    >
                                        Edit Player
                                    </Button>

                                    <Button

                                        mode="contained"
                                        contentStyle={{ flexDirection: 'row-reverse' }}

                                        buttonColor={theme.colors.buttonColor}
                                        textColor={theme.colors.primary}
                                        // onPress={()=>{
                                        //     navigation.navigate("CreatePlayerScreen", {
                                        //         clubId,
                                        //         clubName:playerData[0].name
                                        //     })
                                        // }}


                                    >
                                        Add Stats
                                    </Button>

                                </View>


                            </View>
                            {/* logo */}


                            {/* club details */}
                            <View style={{
                                marginTop: 20,
                                marginBottom: 20
                            }}>

                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Name : {playerData[0].name}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Club : {playerData[0].clubName}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Description : {playerData[0].description}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Positon : {playerData[0].position}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Weight : {playerData[0].weight}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Height : {playerData[0].height}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Number : {playerData[0].jersey_number}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>DOB : {playerData[0].dob}</Text>
                                </View>


                            </View>


                            {/* club details */}

                        </View>

                        :
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                             <ActivityIndicator size="large" color={theme.colors.primary} />

                        </View>
                }
                {/* cover image */}

                {/* cover image */}

            </ScrollView>
        </SafeAreaView>
    )
}

export default PlayerDetails

const styles = StyleSheet.create({

    errorContainer: {
        marginHorizontal: 10,
        marginTop: -18
    },


    errorColor: { color: '#EF4444', marginTop: 5 },
    text: {
        fontSize: 16,
        color: "#000",
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 2,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
    },
    playerlink:{
        color:"#1c478e"
    }

})
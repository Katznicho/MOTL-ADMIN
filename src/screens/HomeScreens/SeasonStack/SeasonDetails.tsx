import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { generalstyles } from '../../../generalstyles/generalstyles';
import { CLUBS, SEASONS } from '../../../constants/endpoints';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { ActivityIndicator, Button, IconButton } from 'react-native-paper';
import { theme } from '../../../theme/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SeasonDetails = ({ navigation }: any) => {
    const { seasonId } = useRoute<any>().params


    const [seasonData, setseasonData] = React.useState<any>([]);

    const getSeasonData = async () => {
        const seasonDoc = await firestore().collection(SEASONS).doc(seasonId).get();
        if (seasonDoc.exists) {
            const seasonData = seasonDoc.data();
            const details = {
                ...seasonData,
                seasonId: seasonDoc.id,
                
            };
            setseasonData([details]);
            // Use clubData to display the club information on the page
        } else {
            // Handle the case when the club document does not exist
            Alert.alert('Club does not exist!');
        }
    };

    useEffect(() => {
        const unsubscribe = firestore()
            .collection(SEASONS)
            .doc(seasonId)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    const seasonData = doc.data();
                    const details = {
                        ...seasonData,
                        seasonId: seasonId
                    };


                    setseasonData([details]);
                    // Use clubData to update the club information on the page
                } else {
                    // Handle the case when the club document no longer exists
                    Alert.alert('Club no longer exists!');
                }
            });

        return () => unsubscribe(); // Unsubscribe when the component unmounts

    }, [seasonId]);




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
                    seasonData.length > 0 ?
                        <View>
                            <ImageBackground
                                source={{ uri: seasonData[0].logo }}
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
                                        source={{ uri: seasonData[0].logo }}
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
                                        onPress={() => {
                                            navigation.navigate("EditClubScreen", {
                                                seasonId,
                                                seasonName: seasonData[0].name,
                                                numOfTeams: seasonData[0].numOfTeams,
                                            })
                                        }
                                        }


                                    >
                                        Edit Season
                                    </Button>

                                    {/* view fixtures */}
                                    <Button

                                        mode="contained"
                                        contentStyle={{ flexDirection: 'row-reverse' }}

                                        buttonColor={theme.colors.buttonColor}
                                        textColor={theme.colors.primary}
                                        style={{ marginVertical: 5 }}
                                        onPress={() => {
                                            navigation.navigate("SeasonFixtureScreen", {
                                                seasonId,
                                                seasonName: seasonData[0].name
                                            })
                                        }}


                                    >
                                        View Fixtures
                                    </Button>
                                    {/* view fixtures */}

                                    <Button

                                        mode="contained"
                                        contentStyle={{ flexDirection: 'row-reverse' }}

                                        buttonColor={theme.colors.buttonColor}
                                        textColor={theme.colors.primary}
                                        onPress={() => {
                                            navigation.navigate("AddFixtureScreen", {
                                                seasonId,
                                                seasonName: seasonData[0].name,
                                                numOfTeams: seasonData[0].numOfTeams
                                            })
                                        }}


                                    >
                                        Add  Fixture
                                    </Button>

                                </View>


                            </View>
                            {/* logo */}
                            <TouchableOpacity style={{
                                marginHorizontal: 20
                            }}
                                onPress={() => navigation.navigate("SeasonTableScreen", {
                                    seasonId,
                                    seasonName: seasonData[0].name
                                })}
                            >
                                <Text style={styles.playerlink}>View Table</Text>
                            </TouchableOpacity>

                            {/* club details */}
                            <View style={{
                                marginTop: 20,
                                marginBottom: 20
                            }}>

                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Name : {seasonData[0].name}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Start Date: {seasonData[0].startDate}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>End Date : {seasonData[0].endDate}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Total Teams : {seasonData[0].numOfTeams}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Season Length: {seasonData[0].seasonLength}</Text>
                                </View>
                                <View style={styles.viewStyle}>
                                    <Text style={styles.text}>Description : {seasonData[0].description}</Text>
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

export default SeasonDetails

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
    playerlink: {
        color: "#1c478e"
    }

})
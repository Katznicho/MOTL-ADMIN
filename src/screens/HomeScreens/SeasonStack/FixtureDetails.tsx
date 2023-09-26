import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { generalstyles } from '../../../generalstyles/generalstyles';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { CLUBS, SEASONS, SEASON_FIXTURES } from '../../../constants/endpoints';
import { theme } from '../../../theme/theme';
import { ActivityIndicator, Button, IconButton } from 'react-native-paper';
import { formatDate } from '../../../utils/Helpers';
import { TabView, SceneMap } from 'react-native-tab-view';



const FirstRoute = () => (
  <View >
    <Text style={{ color: "black" }}>First</Text>
  </View>
);

const SecondRoute = () => (
  <View style={{  backgroundColor: 'red' }} >
    <Text style={{ color: "black" }}>Second</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});



const FixtureDetails = ({ navigation }: any) => {

  const { seasonId, seasonName, fixtureId } = useRoute<any>().params
  const [fixtureDetails, setFixtureDetails] = useState<any>([]);


  const getFixtureDetails = async () => {
    try {
      const fixture = await firestore().collection(SEASONS).doc(seasonId).collection(SEASON_FIXTURES).doc(fixtureId).get();
      const fixtureData = fixture.data();
      const homeTeamId = fixture.data()?.homeTeam;
      const awayTeamId = fixture.data()?.awayTeam;
      const details = {
        ...fixtureData,
        homeTeamDetails: (await firestore().collection(CLUBS).doc(homeTeamId).get()).data(),
        awayTeamDetails: (await firestore().collection(CLUBS).doc(awayTeamId).get()).data(),
      };

      setFixtureDetails([details]);
      return details;
    } catch (error) {
      // Handle the error here
    }
  };

  useEffect(() => {
    getFixtureDetails();
  }, []);


  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ])




  return (
    <SafeAreaView style={[generalstyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        showsHorizontalScrollIndicator={false}
        style={{
          paddingBottom: 50,
        }}
      >
        {
          fixtureDetails.length > 0 ?
            <View>
              <View

                style={{
                  width: '100%',
                  height: 200,
                  backgroundColor: theme.colors.primary
                }}


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

                {/* details area */}
                <View style={{ marginHorizontal: 20 }}>
                  <View>
                    <Text style={styles.round}>{fixtureDetails[0]?.round}</Text>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',

                  }}>

                    {/* home team */}

                    <View style={[{ marginHorizontal: 10 }]}>

                      <Image
                        source={{
                          uri: fixtureDetails[0]?.homeTeamDetails?.logo
                        }}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 50,
                          borderColor: theme.colors.white,
                          borderWidth: 1,
                        }}
                      />
                      <View style={styles.teamNameDiv}>
                        <Text style={styles.teamName}>{fixtureDetails[0]?.homeTeamDetails.name}</Text>
                      </View>


                    </View>

                    {/* home team */}
                    <View >
                      <Text style={styles.time}>{fixtureDetails[0]?.startingTime}</Text>
                      <Text style={styles.date}>{formatDate(fixtureDetails[0]?.fixtureDate)}</Text>
                    </View>
                    {/* away team */}
                    <View >

                      <Image
                        source={{
                          uri: fixtureDetails[0]?.awayTeamDetails?.logo
                        }}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 50,
                          borderColor: theme.colors.white,
                          borderWidth: 1,
                        }}
                      />
                      <View style={styles.teamNameDiv}>
                        <Text style={styles.teamName}>{fixtureDetails[0]?.awayTeamDetails.name}</Text>
                      </View>

                    </View>
                    {/* away team */}

                  </View>
                </View>
                {/* details area */}
              </View>
              {/* logo */}




              {/* tabs */}

              <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
              />

              {/* tabs */}

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

      </ScrollView>
    </SafeAreaView>
  )
}

export default FixtureDetails

const styles = StyleSheet.create({
  date: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  time: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.white,
  },

  round: {
    fontSize: 22,
    color: theme.colors.white,
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  teamNameDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 12,
    color: theme.colors.white,
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    marginHorizontal: 5,
  },
  fixtureDate: {
    fontSize: 12,
    color: theme.colors.white,
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
})
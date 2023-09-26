// @ts-nocheck

import { StyleSheet, Text, View, SafeAreaView, Modal, TextInput, Alert } from 'react-native'
import React from 'react'
import { generalstyles } from '../../generalstyles/generalstyles'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { theme } from '../../theme/theme'
import { Button } from 'react-native-paper'
import { faker } from '@faker-js/faker';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { CLUBS, CLUB_PLAYERS, PLAYERS } from '../../constants/endpoints'
import { ProgressBar } from "react-native-paper"
import { showMessage } from 'react-native-flash-message'

const HomeScreen = ({ navigation }: any) => {


  const [modalVisible, setModalVisible] = React.useState(false);
  const [numberOfTeams, setNumberOfTeams] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(0);


  const onClickClubTemplate = () => {

  }

  const onClickPlayerTemplate = () => {
  }


  const onCreateTeams = async () => {
    try {
      setLoading(true);

      showMessage({
        message: 'Creating Teams',
        description: 'Please wait',
        type: 'success',
      });

      const teamPromises = Array.from({ length: numberOfTeams }).map(async (_, teamIndex) => {
        const clubRef = await firestore().collection(CLUBS).add({
          coverImage:"https://www.istockphoto.com/photo/soccer-ball-on-the-yellow-background-with-place-for-your-text-gm1470220952-501145879?phrase=club%20logo",
          logo:"https://www.istockphoto.com/photo/soccer-ball-on-the-yellow-background-with-place-for-your-text-gm1470220952-501145879?phrase=club%20logo",
          name: "Template Club",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, pariatur sed esse reprehenderit facere nesciunt dolore quasi quae tempore eaque.",
          location:"Lorem ipsum dolor",
          website: "url",
          email: "tem",
          phoneNumber: "",
          founded: "",
          stadium: "",
          capacity: "1000",
          manager: "lorem ipsum dolor",
          socailMediaPages: [],
          owner: "lorem ipsum dolor",
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          identifier: 'template',
        });

        if (clubRef && numberOfPlayers > 0) {
          const playerPromises = Array.from({ length: numberOfPlayers }).map(async (_, playerIndex) => {
            await firestore()
              .collection(CLUB_PLAYERS)
              .doc(clubRef.id)
              .collection(PLAYERS)
              .add({
                name:" Template Club " + "Player" ,
                clubId: clubRef.id,
                clubName:"Template Club",
                height: '6ft',
                weight: '80kg',
                position: 'Striker',
                stronger_footer: 'Right',
                dob:"",
                description: "lorem ipsum dolor",
                jersey_number: 'Jersey 10' ,
                profile_pic: "https://www.istockphoto.com/photo/soccer-ball-on-the-yellow-background-with-place-for-your-text-gm1470220952-501145879?phrase=club%20logo",
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
              });
          });

          await Promise.all(playerPromises);
        }

        return clubRef;
      });

      const teams = await Promise.all(teamPromises);
      showMessage({
        message: 'Teams Created',
        description: 'Please wait',
        type: 'success',
      });
      setLoading(false);
      setModalVisible(false);
    } catch (error) {
      console.log(error);
      showMessage({
        message: 'Error',
        description: 'Please try again',
        type: 'danger',
      });
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[generalstyles.container]}>
      {/* modal to select the number of teams to create */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.selectClubView}>
              <Text style={styles.selectClubText}>Create Teams</Text>
            </View>
            <View>
              <Text style={styles.selectClubText}>Number of Teams</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter number of teams"
                keyboardType="numeric"
                onChangeText={(text) => setNumberOfTeams(text)}
                value={numberOfTeams}
                keyboardType="numeric"
              />
            </View>
            {/* players */}
            <View>
              <Text style={styles.selectClubText}>Number of Players (Optional)</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter number of players"
                keyboardType="numeric"
                onChangeText={(text) => setNumberOfPlayers(text)}
                value={numberOfPlayers}
                keyboardType="numeric"
              />
            </View>
            {/* players */}
            {/* other actions */}
            <View style={[generalstyles.flexStyles, { alignItems: "center", justifyContent: "space-between" }]}>
              <Button
                mode="contained"
                contentStyle={{
                  flexDirection: 'row-reverse',
                }}
                style={{ marginRight: 10 }}
                buttonColor={theme.colors.red}
                disabled={loading}
                textColor={theme.colors.textColor}
                onPress={() => setModalVisible(false)}

              >
                Cancel
              </Button>
              <Button
                mode="contained"
                contentStyle={{
                  flexDirection: 'row-reverse',
                }}
                // disabled={selectedClub == null || loading}
                disabled={loading || numberOfTeams == 0}
                style={{ marginRight: 10 }}
                buttonColor={theme.colors.success}
                textColor={theme.colors.textColor}
                onPress={onCreateTeams}

              >
                Create Teams
              </Button>
            </View>
            {/* other actions */}

          </View>
        </View>
      </Modal>

      {/* modal to select the number of teams to create */}

      <ScrollView>


        {/* create tab to create a post and status */}
        <View style={styles.cardRow}>

          <TouchableOpacity style={styles.cardContainer}
            onPress={() => navigation.navigate('StatusScreen')}
          >
            <Text style={styles.title}>Add Status</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer}
            onPress={() => navigation.navigate('PostScreen')}
          >
            <Text style={styles.title}>Add Post</Text>
          </TouchableOpacity>
          {/* create tab to create a post and status */}

        </View>

        {/* create a club */}
        <View style={styles.cardRow}>

          <TouchableOpacity style={styles.cardContainer}
            onPress={() => navigation.navigate('ClubScreen')}
          >
            <Text style={styles.title}>Add Club</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer}
            onPress={() => navigation.navigate('PlayerScreen')}
          >
            <Text style={styles.title}>Add Players</Text>
          </TouchableOpacity>


        </View>

        {/* create a club */}

        {/* subscriptions and payments */}
        <View style={styles.cardRow}>

          <TouchableOpacity style={styles.cardContainer}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.title}>Create Teams </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[
            styles.cardContainer,
            {
             marginRight:40,
             padding:40
            }
          ]}
            onPress={() => navigation.navigate("AddSeasonScreen")}
          >
            <Text style={styles.title}>Add Season  </Text>
          </TouchableOpacity>


        </View>
        {/*  subscriptions and payments*/}

      </ScrollView>


    </SafeAreaView>




  )
}



export default HomeScreen

const styles = StyleSheet.create({


  cardParent: { flex: 1, margin: 10 },
  cardRow: { flexDirection: 'row', alignItems: "center", marginVertical: 10, marginRight: 10 },

  cardContainer: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    marginRight: 20,
  },

  title: { fontWeight: 'bold', color: '#000' },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modalView: {
    // margin: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: theme.colors.textColor,
    padding: 10,
    width: 200,
  }
})
// @ts-nocheck

import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { generalstyles } from '../../generalstyles/generalstyles'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeScreen = ({ navigation }: any) => {

  return (
    <SafeAreaView style={[generalstyles.container]}>

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
            <Text style={styles.title}>Add Clubs</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer}
            onPress={() => navigation.navigate('PlayerScreen')}
          >
            <Text style={styles.title}>Add Players</Text>
          </TouchableOpacity>


        </View>

        {/* create a club */}

        {/* subscriptions and payments */}
        {/* <View style={styles.cardRow}>

          <TouchableOpacity style={styles.cardContainer}
            onPress={() => navigation.navigate('ClubScreen')}
          >
            <Text style={styles.title}>Add Subscription</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardContainer}
            onPress={() => navigation.navigate('PlayerScreen')}
          >
            <Text style={styles.title}>Add Paymeth</Text>
          </TouchableOpacity>


        </View> */}
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
})
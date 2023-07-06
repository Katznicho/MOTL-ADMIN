import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TopBar from '../../../components/AppBars/TopBar';
import { theme } from '../../../theme/theme';
import HomeScreen from '../HomeScreen';
import CreateStatus from './CreateStatus';
import CreatePost from './CreatePost';
import CreateClub from './CreateClub';
import ClubPage from './ClubPage';
import Clubs from '../ClubStack/Clubs';
import CreatePlayer from './CreatePlayer';
import Players from './Players';
import PlayerDetails from './PlayerDetails';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: props => (
            <TopBar
              showSearch
              {...props}
              title={"MOTL ADMIN"}

              titleStyle={{
                color: `${theme.colors.textColor}`, 
                fontSize: 18,
                // width: 44,
                // textShadowColor: "rgba(0, 0, 0, 0.5)",
                // textShadowOffset: {
                //   width: 0,
                //   height: 4,
                // },
                // textShadowRadius: 4,
                // textAlign: "left",
                // fontFamily: "LeagueGothic-Regular",

              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.textColor}`,
                marginBottom: 5,
              }}
            />
          ),
        }}

      />
       {/* status */}
       <Stack.Screen
        name="StatusScreen"
        component={CreateStatus}
        options={{
          header: props => (
            <TopBar
              showSearch
              {...props}
              title={"Add Status"}

              titleStyle={{
                color: `${theme.colors.textColor}`, 
                fontSize: 18,
                // width: 44,
                // textShadowColor: "rgba(0, 0, 0, 0.5)",
                // textShadowOffset: {
                //   width: 0,
                //   height: 4,
                // },
                // textShadowRadius: 4,
                // textAlign: "left",
                // fontFamily: "LeagueGothic-Regular",

              }}
              
            />
          ),
        }}

      />
       {/* status */}
       {/* post */}
       <Stack.Screen
        name="PostScreen"
        component={CreatePost}
        options={{
          header: props => (
            <TopBar
              showSearch
              {...props}
              title={"Add Post"}

              titleStyle={{
                color: `${theme.colors.textColor}`, 
                // fontSize: 18,
                // width: 44,
                // textShadowColor: "rgba(0, 0, 0, 0.5)",
                // textShadowOffset: {
                //   width: 0,
                //   height: 4,
                // },
                textShadowRadius: 4,
                textAlign: "left",
                // fontFamily: "LeagueGothic-Regular",

              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.textColor}`,
                marginBottom: 5,
              }}
            />
          ),
        }}

      />
       {/* post */}

       {/* create a club */}
       <Stack.Screen
        name="ClubScreen"
        component={CreateClub}
        options={{
          header: props => (
            <TopBar
              showSearch
              {...props}
              title={"Add Club"}

              titleStyle={{
                color: `${theme.colors.textColor}`, 
                // fontSize: 18,
                // width: 44,
                // textShadowColor: "rgba(0, 0, 0, 0.5)",
                // textShadowOffset: {
                //   width: 0,
                //   height: 4,
                // },
                textShadowRadius: 4,
                textAlign: "left",
                // fontFamily: "LeagueGothic-Regular",

              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.textColor}`,
                marginBottom: 5,
              }}
            />
          ),
        }}

      />
       {/* create a club */}

       {/* player screen */}
       <Stack.Screen
        name="PlayerScreen"
        component={Clubs}
        options={{
          header: props => (
            <TopBar
              showSearch
              {...props}
              title={"Choose Club"}

              titleStyle={{
                color: `${theme.colors.textColor}`, 
                // fontSize: 18,
                // width: 44,
                // textShadowColor: "rgba(0, 0, 0, 0.5)",
                // textShadowOffset: {
                //   width: 0,
                //   height: 4,
                // },
                textShadowRadius: 4,
                textAlign: "left",
                // fontFamily: "LeagueGothic-Regular",

              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.textColor}`,
                marginBottom: 5,
              }}
            />
          ),
        }}

      />

       {/* create a player */}
       <Stack.Screen
        name="CreatePlayerScreen"
        component={CreatePlayer}
        options={{
          header: props => (
            <TopBar
              showSearch
              {...props}
              title={"Create  Player"}

              titleStyle={{
                color: `${theme.colors.textColor}`, 
                // fontSize: 18,
                // width: 44,
                // textShadowColor: "rgba(0, 0, 0, 0.5)",
                // textShadowOffset: {
                //   width: 0,
                //   height: 4,
                // },
                textShadowRadius: 4,
                textAlign: "left",
                // fontFamily: "LeagueGothic-Regular",

              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.textColor}`,
                marginBottom: 5,
              }}
            />
          ),
        }}

      />
       {/* create a player */}


       {/* player screen */}

       {/* club page */}
       <Stack.Screen
        name="ClubDetailScreen"
        component={ClubPage}
        options={{
          headerShown: false,
        }}

      />
       {/* club page */}

        {/* players */}
        <Stack.Screen
        name="AllPlayerScreen"
        component={Players}
        options={{
          header: props => (
            <TopBar
              showSearch
              {...props}
              title={"Players"}

              titleStyle={{
                color: `${theme.colors.textColor}`, 
                // fontSize: 18,
                // width: 44,
                // textShadowColor: "rgba(0, 0, 0, 0.5)",
                // textShadowOffset: {
                //   width: 0,
                //   height: 4,
                // },
                textShadowRadius: 4,
                textAlign: "left",
                // fontFamily: "LeagueGothic-Regular",

              }}
              subtitleStyle={{
                alignSelf: 'center',
                color: `${theme.colors.textColor}`,
                marginBottom: 5,
              }}
            />
          ),
        }}

      />
        {/* players */}

       {/* player details */}
       <Stack.Screen
        name="PlayerDetails"
        component={PlayerDetails}
        options={{
          headerShown: false,
        }}

      />
       {/* player details */}
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TopBar from '../../../components/AppBars/TopBar';
import { theme } from '../../../theme/theme';
import Seasons from './Seasons';
import SeasonDetails from './SeasonDetails';
import LeagueTable from './LeagueTable';
import SeasonFixtures from './SeasonFixtures';
import AddFixture from './AddFixture';
import FixtureDetails from './FixtureDetails';


const Stack = createStackNavigator();

const SeasonStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='SeasonsScreen'
        >
            <Stack.Screen
                name="SeasonsScreen"
                component={Seasons}
                options={{
                    header: props => (
                        <TopBar
                            showSearch
                            {...props}
                            title={"Seasons"}

                            titleStyle={{
                                color: `${theme.colors.textColor}`,
                                marginLeft: 10,
                                fontFamily: "LeagueGothic-Regular",
                                fontStyle: 'normal',
                                fontSize: 28,
                                lineHeight: 34,

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

            {/* season table */}
            <Stack.Screen
                name="SeasonTableScreen"
                component={LeagueTable}
                options={{
                    header: (props: any) => (
                        <TopBar
                            showSearch
                            {...props}
                            title={props.route.params.seasonName}
                            previous={true}

                            titleStyle={{
                                color: `${theme.colors.textColor}`,
                                marginLeft: 10,
                                fontFamily: "LeagueGothic-Regular",
                                fontStyle: 'normal',
                                fontSize: 28,
                                lineHeight: 34,

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
            {/* season table */}

            {/* fixtures */}
            <Stack.Screen
                name="SeasonFixturesScreen"
                component={SeasonFixtures}
                options={{
                    header: props => (
                        <TopBar
                            showSearch
                            {...props}
                            title={"Seasons"}

                            titleStyle={{
                                color: `${theme.colors.textColor}`,
                                marginLeft: 10,
                                fontFamily: "LeagueGothic-Regular",
                                fontStyle: 'normal',
                                fontSize: 28,
                                lineHeight: 34,

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

            <Stack.Screen
                name="AddFixtureScreen"
                component={AddFixture}
                options={{
                    header: (props: any) => (
                        <TopBar
                            showSearch
                            {...props}
                            title={props.route.params.seasonName}
                            previous={true}

                            titleStyle={{
                                color: `${theme.colors.textColor}`,
                                marginLeft: 10,
                                fontFamily: "LeagueGothic-Regular",
                                fontStyle: 'normal',
                                fontSize: 28,
                                lineHeight: 34,

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

            <Stack.Screen
                name="SeasonFixtureScreen"
                component={SeasonFixtures}
                options={{
                    header: (props: any) => (
                        <TopBar
                            showSearch
                            {...props}
                            title={`${props.route.params.seasonName} Fixtures`}
                            previous={true}

                            titleStyle={{
                                color: `${theme.colors.textColor}`,
                                marginLeft: 10,
                                fontFamily: "LeagueGothic-Regular",
                                fontStyle: 'normal',
                                fontSize: 28,
                                lineHeight: 34,

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

            <Stack.Screen
                name="FixtureDetailsScreen"
                component={FixtureDetails}
                options={{
                   headerShown:false
                }}
            />

            {/* fixtures */}

            <Stack.Screen
                name="SeasonDetailsScreen"
                component={SeasonDetails}
                options={{
                    headerShown: false,
                }}

            />
        </Stack.Navigator>
    )
}

export default SeasonStack


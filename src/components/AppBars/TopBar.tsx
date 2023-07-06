import React from "react";
import { Appbar, Badge } from 'react-native-paper';
import { View, StyleSheet, Platform, Alert } from "react-native";
import { theme } from "../../theme/theme";
import { generalstyles } from "../../generalstyles/generalstyles";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices/UserSlice";
import auth from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import App from "../../../App";



const TopBar = ({ title, titleStyle }: any) => {

    const dispatch = useDispatch();

    const handleSignOut = async () => {
        try {
            await auth().signOut()
            dispatch(logoutUser())
            // Handle any additional actions after the user is signed out
        } catch (error) {
            // Handle any errors that may occur during the signout process
        }
    };


    const onSignOut = () => {
        Alert.alert(
            'Sign Out',
            'Are you sure you want to sign out?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },

                {
                    text: 'OK',
                    onPress: () => handleSignOut(),
                },
            ],
            { cancelable: false },
        );
    };



    return (
        <Appbar.Header

            style={{
                backgroundColor: `${theme.colors.primary}`,
                width: "100%",
                marginBottom: 5,
                alignItems: 'center',
                marginLeft: 30,
                height: 45,
                ...Platform.select({
                    ios: {
                        marginTop: 0,
                    },
                    android: {
                        marginTop: 0,
                    },
                }),
                borderWidth: 0,
                borderColor: theme.colors.primary,

            }}
        >
            {/* user image and title */}

            {/* <Avatar.Icon size={35} icon="account" style={{
                backgroundColor: `${theme.colors.white}`,
                marginRight: 5
            }} /> */}
           
            <Appbar.Content
                title={title}
                titleStyle={titleStyle}
            />


            {/* user image and title */}

            {/* {previous ?

                <Appbar.BackAction onPress={navigation.goBack} color={`${theme.colors.white}`} />
                : null} */}


            {/* icon section */}

            <View style={[generalstyles.flexStyles,
            {
                marginLeft: 20,
            }
            ]}>

                <Appbar.Action 
            icon="logout"
                
                size={25}
                color={theme.colors.white}
                onPress={onSignOut}
            />
            </View>

           <View>
              <MaterialCommunityIcons name="logout" size={25} color={theme.colors.white} onPress={onSignOut} />

           </View>








            {/* icon section */}





        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    appHeaderStyle: {
        backgroundColor: `${theme.colors.primary}`,
        width: "100%",
        height: 60,
    },
    badgeStyle: {
        position: 'absolute',
        top: 5,
        right: 5,
        color: `${theme.colors.white}`,
        backgroundColor: theme.colors.red,
        fontWeight: "600",
        fontSize: 10,
        zIndex: 20,
        fontFamily: "Montserrat-VariableFont_wght",
        fontStyle: 'normal',
        lineHeight: 20,
    },
    titleStyle: {
        marginTop: -10,
        color: `${theme.colors.primary}`
    },
    iconGroupLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: "hidden",
    },
    iconSearchOutline: {
        marginRight: 40,
    },
})
export default TopBar
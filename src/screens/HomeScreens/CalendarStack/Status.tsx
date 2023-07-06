import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generalstyles } from '../../../generalstyles/generalstyles';
import { ScrollView } from 'react-native';
import { USER_STATUS } from '../../../constants/endpoints';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';

const Status = () => {
    const { user } = useSelector((state: RootState) => state.user);
    const [status, setStatus] = useState<any>([]);
    const getLatestStatusesForUsers = async () => {
        try {
            const statuses = await firestore().collection(USER_STATUS).get(); // Assuming you have a "users" collection
            const latestStatuses = [];
            for (const statusDoc of statuses.docs) {

                const statusData = statusDoc.data();
                // const currentTime = firestore.Timestamp.now();
                // const twentyFourHoursAgo = currentTime.toMillis() - 24 * 60 * 60 * 1000;
                // const latestStatusesWithin24Hours = statusData.createdAt.toMillis() >= twentyFourHoursAgo;
                // const sortedLatestStatuses = latestStatusesWithin24Hours;
                //if(statusData.uid == user?.uid){

                setStatus((prev: any) => [...prev, statusData])

                //}
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLatestStatusesForUsers();
        console.log(status)
    }, [])
    
    return (
        <SafeAreaView style={[generalstyles.container]}>
            <FlatList
                data={status}
                renderItem={({ item }) => (
                    <View style={styles.containerStyles}>
                         <Image
                            source={{ uri: item.image }}
                            style={{ 
                                width: 100, 
                                height: 100 ,
                                borderRadius: 10,
                            }}
                        />
                        <Text style={styles.textStyles}>{item.caption}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />

        </SafeAreaView>
    )
}

export default Status

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    imageStyles: {
        width: 50,
        height: 50
    },
    containerStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    }

})
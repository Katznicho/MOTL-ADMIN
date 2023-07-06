// @ts-nocheck
import { View, Text, Image } from 'react-native'
import React from 'react'


const Card = () => {
    return (
        <View clasName=" ">
            <View className=" bg-[#92679a] h-[250px] mt-3  w-[160px]  mx-2  border-[#FF0000]  rounded-[10px] border brounded-[10px]  items-center">
                <View className="flex-row    space-x-2   mt-2 ">
                    <Image source={require("../assets/radio.png")} />
                    <Text className="text-[18px] font-bold text-white"> LIVE GAME</Text>

                </View>
                <Text className="text-[18px] font-bold text-white  mt-3"> HT: 45 Mins</Text>
                <View className=" flex-row  mt-3 space-x-3 items-center">
                    <Image source={require("../assets/burenga.png")} />
                    <Text className=" text-white"> Vs</Text>
                    <Image source={require("../assets/Olympiaco.png")} />
                </View>
                <Text className="text-white mb-2 mt-3 "> BERUGA FC</Text>
                <Text className=" text-white "> Olympiacos FC</Text>
            </View>

        </View>
    )
}

export default Card
// @ts-nocheck
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, VirtualizedList } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Card from './Card'
import SecondCard from './SecondCard'


const Cards = () => {
    const [count, setCount] = useState(10);
    const [isIncrementing, setIsIncrementing] = useState(true);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleIconPress = () => {
        if (isIncrementing) {
            handleIncrement();
        } else {
            handleDecrement();
        }

        setIsIncrementing(!isIncrementing);
    };

    return (
        <View clasName="h-full   items-center">
            <View className="bg-[#FE7878] w-full  flex-row h-[279px]   ">
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                    <Card />
                    <SecondCard />
                    <SecondCard />
                    <SecondCard />

                </ScrollView>

            </View>
            <View className="bg-[#eb7e96]  h-[1150px]  items-center  mt-2">
                <View >

                    <View className="flex-row  justify-between px-5 p-5 items-center">
                        <Text className="text-[#511760] font-extrabold text-[24px]"> WHAT’S LATEST</Text>
                        <View className=" border rounded-full w-[37px] h-[37px] items-center justify-center">
                            <Image source={require("../assets/icon.png")} className="" /></View>



                    </View>
                    <View className='w-[350px]  items-center h-[500px] justify-center  rounded-t-[30px]'>
                        <View className='items-center relative w-[350px] object-contain  h-[400px]   rounded-t-[10px]'>
                            <Image source={require("../assets/centerimg.png")} className="items-center relative w-[350px] object-contain  h-[400px]   rounded-t-[10px] flex-1" />
                            <Text className="text-white font-extrabold text-[21px] absolute  bottom-0 ">
                                MATCH OF THE DAY GOES TO BERUGA FC Vs OLYMPIACOS FC.</Text>
                        </View>


                        <View className=' w-[350px] h-32 bg-white  rounded-b-[10px]'>

                            <View className='flex-row  items-center px-3 p-3'>
                                <View className='flex-row space-x-[-25px] items-center'>

                                    <Image source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*19neud9*_ga*NzY1Nzg3NTQyLjE2ODQwOTk5ODg.*_ga_8JE65Q40S6*MTY4NzQxMjAwNi44LjEuMTY4NzQxMjM3My4wLjAuMA..' }} className=' bg-gray-500 rounded-full w-10 h-10' />
                                    <Image source={{ uri: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} className=' bg-gray-500 rounded-full w-10 h-10' />

                                    <Image source={{ uri: 'https://images.pexels.com/photos/7171858/pexels-photo-7171858.jpeg?cs=srgb&dl=pexels-khris-kunta-kuku-7171858.jpg&fm=jpg&_gl=1*ra3v3q*_ga*NzY1Nzg3NTQyLjE2ODQwOTk5ODg.*_ga_8JE65Q40S6*MTY4NzQxMjAwNi44LjEuMTY4NzQxMjEyMi4wLjAuMA..' }} className=' bg-gray-500 rounded-full w-10 h-10' />
                                    <View className='bg-[#b4b3f1] rounded-full w-10 h-10 items-center justify-center'>
                                        <Text className='font-bold text-[18px] text-white '>+50</Text>
                                    </View>

                                </View>
                                <Text className='font-bold text-black text-[18px] font-montserrat flex-1'> {count} <Text className='text-gray-700 font-semibold'>Likes </Text></Text>

                                <Text className='font-bold text-black'> 25 <Text className='font-semblod text-black'> comments </Text></Text>
                            </View>
                            <View className='border-[0.3px] px-2 border-[#b4b3f1] w-80 m-2'></View>
                            <View className='flex-row items-center px-3 space-x-3'>
                                <TouchableOpacity onPress={handleIconPress}>
                                    {!isIncrementing ? (
                                        <Image source={require('../assets/likeicon.png')} className='w-10 h-7 px-3' />

                                    ) : (<Image source={require('../assets/likeicon2.png')} className='w-10 h-7 ' />)}


                                </TouchableOpacity>
                                <Text className='text-black '>Like</Text>
                                <View className='items-center flex-row  space-x-2 flex-1'>
                                    <Image source={require('../assets/commenticon.png')} className='h-7 w-10 bg-black placeholder:bg-red-400' />
                                    <TextInput placeholder='commenet'
                                        maxLength={15}


                                    />

                                </View>
                                <TouchableOpacity className='flex-row items-center space-x-1'>
                                    <Image source={require('../assets/share2.png')} className='w-11 h-6 ' />
                                    <Text className='text-black text-[16px]'> share</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View className='h-[500px] relative w-[350px]  bg-gray-500 rounded-[10px] mt-5 items-center'>
                        <Image source={require('../assets/centerimg.png')} className=' h-[500px] w-[350px] rounded-[10px] ' />


                        <Text className='text-white font-bold text-[33px] absolute bottom-28 left-4'>PREDICT AND WIN BREUGA FC VS OLYMPIACOS FC.</Text>
                        <Text className='text-white font-bold text-[30xp] bottom-[90px] absolute left-4 font-poppins'>20:40 Remaining </Text>
                        <TouchableOpacity className='border-4 border-white w-60 h-[66px] left-4 rounded-[30px] items-center justify-center bottom-4 absolute'>
                            <Text className='text-white font-bold text-[25px] '>Predict Now!</Text>
                        </TouchableOpacity>


                    </View>


                </View>
            </View>

            <View className='w- bg-[#eb7e96]  h-[579px] items-center relative   mt-3'>

                <View className=" PX-5 p-5  flex-row space-x-11">
                    <Text className="text-[#511760] font-extrabold text-[27px]">MUST SEE MOMENTS </Text>
                    <View className=" border rounded-full w-[37px] h-[37px] items-center justify-center">
                        <Image source={require("../assets/icon.png")} className="" /></View>





                </View>
                <View className='mt-1 relative'>
                    <ScrollView className=' flex-row'
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View className='h-[450px] relative '>
                            <Image source={require("../assets/centerimg.png")}
                                className="  relative h-[450px] mt-3  w-[360px]  mx-2   bg-slate-400 rounded-[10px] border brounded-[10px]  items-center" ></Image>

                            <Text className="absolute bottom-0 text-white text-[25px] px-7 rounded-[10px] font-bold">Matchday photos: BERUGA FC VS Olympiacos</Text>

                        </View>
                        <View className='h-[450px] relative '>
                            <Image source={require("../assets/centerimg.png")}
                                className="  relative h-[450px] mt-3  w-[360px]  mx-2   bg-slate-400 rounded-[10px] border brounded-[10px]  items-center" ></Image>

                            <Text className="absolute bottom-0 text-white text-[25px] px-7 rounded-[10px] font-bold">Matchday photos: BERUGA FC VS Olympiacos</Text>

                        </View>
                        <View className='h-[450px] relative '>
                            <Image source={require("../assets/centerimg.png")}
                                className="  relative h-[450px] mt-3  w-[360px]  mx-2   bg-slate-400 rounded-[10px] border brounded-[10px]  items-center" ></Image>

                            <Text className="absolute bottom-0 text-white text-[25px] px-7 rounded-[10px] font-bold">Matchday photos: BERUGA FC VS Olympiacos</Text>

                        </View>

                    </ScrollView>
                </View>
            </View>


        </View>
    )
}

export default Cards

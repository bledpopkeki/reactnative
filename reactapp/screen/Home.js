    import React from 'react';
    import { View, Text, StyleSheet, Button, Image } from 'react-native';
    import Swiper from 'react-native-swiper';

    const Home = () => {
        return (
            <View>
                <View>
                    <Swiper
                    autoplay
                    activeDotColor="lightblue"
                    autoplayTimeout={5}    
                    >
                        <View>
                            <Image
                            source={require('../assets/image1.png')}
                            style={}
                            resizeMode='cover'
                            />
                        </View>
                        <View>
                            <Image
                            source={require('../assets/image2.png')}
                            style={}
                            resizeMode='cover'
                            />
                        </View>
                        <View>
                            <Image
                            source={require('../assets/image3.png')}
                            style={}
                            resizeMode='cover'
                            />
                        </View>
            
                    </Swiper>
                </View>
            </View>
        );
    }

    const styles = StyleSheet.create({
    
        conatiner: {
            flex: 1,
            backgroundColor: 'white',
        },
        sliderContainer: {
            height: 200,
            width: '90%',
            marginTop: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 8
        },
        ImageItem: {
            height: '100%',
            width: '100%',
            borderRadius: 8,
        },
        item: {
            flex: 1,
            justifyContent: 'center',
        },
        iconContainers: {
            width: '100%',
            alignSelf; 'center',
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 35,
            marginBottom: 15,
        },

    });
    
    export default Home;
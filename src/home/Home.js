import React, { Component } from 'react';
import { TextInput,TouchableOpacity,StatusBar,
    View,  Text, Image,
    FlatList, Dimensions ,ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width} = Dimensions.get('window')
const s = width / 640;


export default class Home extends Component {    
    
    render() {
        console.log('home')
        return (
            <View style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'center',
                backgroundColor:'#eee'}}>
                    
                <StatusBar backgroundColor="red"/> 
                    <View style={{
                            width:'100%',
                            height:70*s,
                            borderColor:'#eee',
                            flexDirection:'row',
                            alignItems:'center',   
                            backgroundColor:'red',
                        }}>
                        <View style={{
                            marginTop:10*s,
                            marginLeft:25*s,
                            marginBottom:10*s,
                            marginRight:25*s,
                            width:520*s,
                            height:50*s,
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:25,
                            backgroundColor:'#fff',
                            opacity:0.75,
                            paddingLeft:10
                        }}>
                            <TouchableOpacity>
                                <Icon 
                                    name="search" 
                                    style={{color:'#fff',fontSize:22}}
                                />
                            </TouchableOpacity>
                            <TextInput placeholderTextColor="#fff"
                                placeholder="请输入您要搜索的关键字"
                                style={{
                                    width:'86%',
                                    height:40,
                                    color:'#fff'
                                }}
                            />
                        </View>
                        <TouchableOpacity>
                            <Icon 
                                name="shopping-cart" 
                                style={{
                                    color:'#fff',fontSize:25
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView 
                        pagingEnabled={true} 
                        horizontal={true}
                        style={{height:273*s,width:640*s}}
                    >
                        <View style={styles.slide}>
                            <Image resizeMode="contain" source={require('../../assets/icon/xk.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode="contain" source={require('../../assets/icon/xk.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode="contain" source={require('../../assets/icon/xk.png')} />
                        </View>
                    </ScrollView>
                    <ScrollView>
                        <View style={{
                            width:width,
                            height:520*s,
                            alignItems:'center',   
                        }}>
                            <TouchableOpacity style={styles.btn}>
                                <Icon name="shopping-cart" 
                                    style={{
                                        width:'15%',color:'#02F78B',fontSize:30
                                    }}/>
                                <Text style={{width:'70%'}}>居家维修保养</Text>
                                <Icon name="angle-right"  style={styles.rbtn}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <Icon name="flag" 
                                    style={{
                                        width:'15%',color:'red',fontSize:30,
                                    }}/>
                                <Text style={{width:'70%'}}>住宿优惠</Text>
                                <Icon name="angle-right"  style={styles.rbtn}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <Icon name="tachometer" 
                                    style={{
                                        width:'15%',color:'pink',fontSize:30
                                    }}/>
                                <Text style={{width:'70%'}}>出行接送</Text>
                                <Icon name="angle-right"  style={styles.rbtn}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <Icon name="shopping-bag" 
                                    style={{
                                        width:'15%',color:'#46A3FF',fontSize:30
                                    }}/>
                                <Text style={{width:'70%'}}>E族活动</Text>
                                <Icon name="angle-right" style={styles.rbtn}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={{
                                width:545*s,
                                height:70*s,
                                backgroundColor:'red',
                                alignItems:"center",
                                justifyContent:'center',
                                borderRadius:5,
                                marginTop:40*s,
                                marginBottom:55*s,
                                marginLeft:50*s,
                            }}
                        >
                            <Text style={{color:'#fff'}}>发布需求</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign:'center',color:'gray'}}>@E族之家 版权所有</Text>
                    </ScrollView>
            </View>
                
                
            
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        width: 640*s,
        height: 120*s,
        color: '#fff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // textAlignVertical: 'center',
        backgroundColor: '#fff',
        marginTop:10*s
    },
    slide:{
        width:640*s,
        // height: 280,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rbtn:{
        color:'gray',
        fontSize:20
    }
})
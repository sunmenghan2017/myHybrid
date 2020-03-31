import React, { Component } from 'react'
import { Text, View,Button,AsyncStorage,ToastAndroid,StyleSheet,StatusBar,Dimensions,TouchableOpacity,ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width} = Dimensions.get('window')
const s = width / 640;

export default class Mypublish extends Component {
    constructor(){
        super();
        this.state = {
            tits: [],
            page:1
        }
    }
    
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=15')
            .then(res=>res.json())
            .then(res=>{
                this.setState({tits: res.data});
            })
    }
    getData = (page=1)=>{
        fetch('https://cnodejs.org/api/v1/topics?page='+page+'&limit=15')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    tits:res.data
                })
            })
    }
    getDataB = (page)=>{
        if(page!=1){
            page--;
        fetch('https://cnodejs.org/api/v1/topics?page='+page+'&limit=15')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    tits:res.data,
                    page:page
                })
            })
        }
    }
    getDataF = (page)=>{
        page++;
        fetch('https://cnodejs.org/api/v1/topics?page='+page+'&limit=15')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    tits:res.data,
                    page:page
                })
            })
    }
    render() {
        return (
            <View style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'center',
                backgroundColor:'#eee'}}>
                    <StatusBar backgroundColor="red"/> 
                    <View style={{
                            width:'100%',
                            height:50,
                            borderColor:'#eee',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'flex-start',   
                            backgroundColor:'red',
                        }}>
                        
                        <TouchableOpacity style={{width:'10%',paddingLeft:'5%'}} onPress={()=>Actions.pop()}>
                            <Icon 
                                name="angle-left" 
                                style={{color:'#fff',fontSize:20}}
                            />
                        </TouchableOpacity>
                        <Text style={{color:'#fff',fontSize:25,width:'80%',textAlign:'center'}}>我的发布</Text>
                        
                        <TouchableOpacity style={{width:'10%',marginRight:'5%'}}>
                            <Icon 
                                name="ellipsis-h" 
                                style={{
                                    color:'#fff',fontSize:20
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView >
                        {
                            this.state.tits.map((item)=>{
                                let ran=Math.random();
                                return(
                                <View style={{
                                    width:'100%',
                                    height:40,
                                    backgroundColor:'#fff',
                                    flexDirection:'row',
                                    alignItems:'center',
                                    justifyContent:'flex-start',  
                                }}>
                                <Text style={{paddingLeft:'2%',fontSize:14,width:450*s}}>{item.title.lenght<=15?item.title:item.title.slice(0,15)+'···'}</Text>
                                <Text style={{fontSize:10,width:120*s}}>{item.create_at.slice(0,10)}</Text>
                                {/* <Text style={{fontSize:16}}>已回复</Text> */}
                                <Text style={{fontSize:12,color:ran>0.5?'#000':'red'}}>
                                    {ran>0.5?'已回复':'待回复'}
                                </Text>
                                </View>
                                )
                            })
                        }
                    </ScrollView>
                    <View style={{flexDirection:'row',alignItems:'center',width:'100%',height:50}}>
                        <TouchableOpacity style={styles.pages} onPress={this.state.page!=1?()=>{this.getDataB(this.state.page)}:() => {ToastAndroid.showWithGravity('我是悬浮窗信息:已达最顶页',10000, ToastAndroid.LONG,ToastAndroid.TOP)}}>
                            <Text style={styles.ptxt}>上一页</Text>
                        </TouchableOpacity>
                        <Text style={{width:'40%',textAlign:'center'}} >第{this.state.page}页</Text>
                        <TouchableOpacity style={styles.pages} onPress={()=>this.getDataF(this.state.page)}>
                            <Text  style={styles.ptxt}>下一页</Text>
                        </TouchableOpacity>
                    </View>
            </View>
                
                
            
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        width: width,
        height: 66,
        color: '#fff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // textAlignVertical: 'center',
        backgroundColor: '#fff',
        marginTop:5
    },
    slide:{
        width:width,
        // height: 280,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rbtn:{
        color:'gray',
        fontSize:20
    },
    pages:{
        width:'20%',
        height:30,
        backgroundColor:'red',
        borderRadius:20,
        marginLeft:'5%',
        marginRight:'5%'
    },
    ptxt:{
        color:'#fff',
        textAlign:'center',
        textAlignVertical: 'center',
        lineHeight:30
    }
})
      





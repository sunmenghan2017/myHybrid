import React, { Component } from 'react';
import { TouchableOpacity,StatusBar,
    View, Text, Image,ImageBackground,AsyncStorage,Modal,
    FlatList, Dimensions ,ScrollView, StyleSheet,TextInput } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Actions } from 'react-native-router-flux';

const {width} = Dimensions.get('window')
const s = width / 640;
const options = {
    title: '选择头像',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '从图库选择照片',
    customButtons: [{ name: 'fb', title: '从Facebook选择照片' }],
    cancelButtonTitle: '取消',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
let actionArr=[
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
    {title:'维修保养',icon:'home'},
    
]

export default class Userinfor extends Component {  
    constructor(){
        super();
        this.state = {
            imageUrl:true,
        }
    }
    
    componentDidMount(){
        this.getData();        
    }
    getData = ()=>{
        AsyncStorage.getItem('imgUrl')
        .then((res)=>{
            this.setState({
                imageUrl:JSON.parse(res)
            })
        });
    }
    
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source,
                });
                //将图片存到本地
                var storeData=async ()=>{
                    const source1 = JSON.stringify(source);
                    await AsyncStorage.setItem('imgUrl',source1,
                    ()=>{console.log('store success')}
                )}
                storeData();
            }
        });
    }
    render() {
        return (
            // <View>

            //             {
            //                 actionArr.map((item,index)=>{
            //                     // if(index==5){
            //                     //     return <View onPress={()=>{
                                   
            //                     //     }}></View>
            //                     // }
            //                     let ran=Math.random();
            //                 return <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            //                     <Text>{item.title}</Text>
            //                     <Text style={{color:ran>0.5?'#000':'red'}}>
            //                         {ran>0.5?'已回复':'待回复'}
            //                     </Text>
            //                 </View>
            //                 } 
            //                 )
            //             }
            //     </View>
            <ScrollView>
                <View style={{
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'center',
                    backgroundColor:'#eee'}}
                >
                    
                <StatusBar backgroundColor="red"/>   
                    <View style={styles.slide}>
                        <View style={{width:130,height:130,
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlignVertical: 'center',
                            borderRadius:65,
                            backgroundColor:'#fff'
                        }} >
                        <Button 
                        onPress={()=>{this.takephoto()}}
                        >
                            {
                            this.state.imageUrl
                            ?
                            <Image 
                            style={{width:130,height:130,borderRadius:65,}} 
                            source={this.state.imageUrl}
                            />
                            :
                            <Image source={ require('../../assets/icon/user.png') } style={styles.avatar}style={{width:130,height:130,borderRadius:65,}} ></Image>

                            }
                            
                        </Button>
                        </View>
                        <TouchableOpacity><Text style={{fontSize:30,color:'#fff',textAlign:'center'}}>BINNU DHILLON</Text></TouchableOpacity>
                    </View>
                    <View style={styles.title}>
                            <Icon name="user-secret" style={{fontSize:25,color:'#ccc'}} />
                            <Text style={{width:'80%'}}>我的个人中心</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="cog"  style={styles.icons}/>
                            <Text style={{width:'70%'}}>账户管理</Text>
                            
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="map-marker" style={styles.icons}/>
                            <Text style={{width:'70%'}}>收货地址</Text>
                            
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="list-alt"  style={styles.icons}/>
                            <Text style={{width:'70%'}}>我的信息</Text>
                            
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="print"  style={styles.icons}/>
                            <Text style={{width:'70%'}}>我的订单</Text>
                            
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="qrcode"  style={styles.icons}/>
                            <Text style={{width:'70%'}}>我的二维码</Text>
                            
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="database"  style={styles.icons}/>
                            <Text style={{width:'70%'}}>我的积分</Text>
                            
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="star-o"  style={styles.icons}/>
                            <Text style={{width:'70%'}}>我的收藏</Text>
                            
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.title}>
                            <Icon name="ticket" style={{fontSize:25,color:'#ccc'}} />
                            <Text style={{width:'80%'}}>E族活动</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="wrench"  style={styles.icons}/>
                            <Text style={{width:'80%'}}>居家维修保养</Text>   
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="truck"  style={styles.icons}/>
                            <Text style={{width:'70%'}}>出行接送</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="user"  style={styles.icons}/>
                            <Text style={{width:'70%'}}>我的受赠人</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="hotel"  style={styles.icons}/>
                            <Text style={{width:'90%'}}>我的住宿优惠券</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity>
                            <Icon name="flag"  style={styles.icons}/>
                            <Text style={{width:'70%'}}>我的活动</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                        <TouchableOpacity title='我的发布' 
                    onPress={()=>Actions.publish()} >
                            <Icon name="edit"  style={styles.icons} />
                            <Text style={{width:'70%'}}>我的发布</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    {/* <TouchableOpacity>
                        <Text style={{marginTop:30*s,marginBottom:40*s,textAlign:'center',color:'gray'}}>BINNU DHILLON | 退出</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={()=>{AsyncStorage.removeItem('user');Actions.login()}}>
                        <Text style={{marginTop:30*s,marginBottom:40*s,textAlign:'center',color:'gray'}}>退出</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>        
        )
    }
}
const styles = StyleSheet.create({
    box:{
        borderTopWidth:1,
        borderTopColor:"#eee",
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
        marginBottom:10*s ,
        paddingBottom:40*s 
    },
    icons:{
        textAlign:'center',
        color:'#ccc',
        fontSize:25
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'100%',
        height:80*s,
        backgroundColor:'#fff'
    },
    btn:{
        paddingTop:40*s,
        width: width*0.33,
        height: 130*s,
        justifyContent:'center',
        alignItems:'center',
        textAlignVertical: 'center',
        backgroundColor: '#fff',
    },
    slide:{
        width:640*s,
        height:380*s,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red',
    },
    rbtn:{
        color:'gray',
        fontSize:20
    }
})
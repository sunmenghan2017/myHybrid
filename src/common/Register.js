import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid } from 'react-native';
import { Icon } from '@ant-design/react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'
export default class Register extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			pwd: '',
<<<<<<< HEAD
			isRegister:false
=======
                        isRegister:false
>>>>>>> 4be8b62a828fd719fedd195283dda2971aa52f3c
		}
	}
	userhandle = (text) => {
		this.setState({ username: text })
	}
	pwdhandle = (text) => {
		this.setState({ pwd: text })
	}
	register = () => {
		this.setState({ isRegister: true })
		myFetch.post('/register',
			{
				username: this.state.username,
				pwd: this.state.pwd
			}).then(res => {
				AsyncStorage.setItem('user', JSON.stringify(res.data))
					.then(() => {
						ToastAndroid.show('注册成功', 1000);
						setTimeout(() => Actions.login(), 2000)
					})
			})
	}
	render() {
		return (
			<View style={{ flex: 1}}>
				<View style={{flexDirection:'row',height:'10%',width:'90%',marginTop:'5%',marginBottom:'15%'}}>
					<TouchableOpacity onPress={() => Actions.login()} style={{flexDirection:'row', left: '5%'}} >
						<Icon1 
                                name="angle-left" 
								style={{color:'gray',fontSize:20,paddingRight:'5%'}}
                        />
						<Text style={{ fontSize: 16, color: "blue" }}>返回登录页</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{ alignItems: 'center',justifyContent:'center',height:'40%' }}>
					<View
						style={{
							width: '80%',
							marginRight: 10,
							borderBottomColor: '#ccc',
							borderBottomWidth: 1,
							flexDirection: 'row',
							alignItems: 'center',
							paddingLeft: 20,
						}}>
						<Icon name="user" color="red" />
						<TextInput placeholder="用户名"
							onChangeText={this.userhandle}
						/>
					</View>
					<View
						style={{
							width: '80%',
							marginRight: 10,
							borderBottomColor: '#ccc',
							borderBottomWidth: 1,
							flexDirection: 'row',
							alignItems: 'center',
							paddingLeft: 20,
						}}>
						<Icon name="user" color="red" />
						<TextInput
							onChangeText={this.pwdhandle}
							placeholder="密码"
							secureTextEntry={true}
						/>
					</View>
					<TouchableOpacity
						style={{
							width: '80%',
							height: 40,
							backgroundColor: '#ccc',
							marginTop: 30,
							alignItems: 'center',
							justifyContent: 'center'
						}}
						onPress={this.register}>
						<Text>注册</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}



# ShareTest
วิธีการติดตั้ง Share 
npm i react-native-share --save ให้กับโปรเจค

/This is an example code to Share Text Message using Share API// 
import React, { Component } from 'react';
//import react in our code.

import { View, Text, StyleSheet, Share, TextInput, TouchableOpacity, } from 'react-native';
//import all the components we are going to use. 

export default class Myapp extends Component<{}> {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }
  ShareMessage = () => {
    //Here is the Share API 
    Share.share({
      message: this.state.inputValue.toString(),
    }, {
      dialogTitle: 'Share React Native website',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ],
      tintColor: 'green'
    })
    //after successful share return result
    .then(result => console.log(result))
    //If any thing goes wrong it comes here
    .catch(errorMsg => console.log(errorMsg));
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Enter Text to Share"
          style={styles.TextInputStyle}
          onChangeText={TextInputText => {
            this.setState({ inputValue: TextInputText });
          }}
        />
        <TouchableOpacity
          onPress={this.ShareMessage}
          activeOpacity={0.5}
          style={styles.button}>
          <Text style={styles.TextStyle}>Share this Text</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    padding: 40,
  },
  TextInputStyle: {
    borderWidth: 1,
    borderColor: '#009688',
    width: '100%',
    height: 40,
    textAlign: 'center',
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    width: '100%',
    backgroundColor: '#646464',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});


--------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------


App2.js
//ตัวอย่างการใช้ Share สำหรับ Facebook



// This is an Example to Share Post on Facebook from React Native App
import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput, Button } from 'react-native';

//กำหนดค่าตัวแปร
let facebookParameters = ""

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //กำหนดค่าตัวแปรเก็บไว้ใน state โดยจะมี URL และ Message ที่จะทำการโพส
      FacebookShareURL: 'https://aboutreact.com',
      FacebookShareMessage: 'Hello Guys, This is a testing of facebook share example',
    };
  }
  //ทำการตรวจเช็ค URL ที่จะไป และทำการลิ้งไปยัง URL นั้น
  postOnFacebook=() => {
    let FacebookShareURL = this.state.FacebookShareURL;
    let FacebookShareMessage = this.state.FacebookShareMessage;
    if(this.state.FacebookShareURL != undefined)
    {
        if(facebookParameters.includes("?") == false)
        {
            facebookParameters = facebookParameters+"?u="+encodeURI(this.state.FacebookShareURL);
        }else{
            facebookParameters = facebookParameters+"&u="+encodeURI(this.state.FacebookShareURL);
        }
    }
    if(this.state.FacebookShareMessage != undefined)
    {
        if(facebookParameters.includes("?") == false)
        {
            facebookParameters = facebookParameters+"?quote="+encodeURI(this.state.FacebookShareMessage);
        }else{
            facebookParameters = facebookParameters+"&quote="+encodeURI(this.state.FacebookShareMessage);
        }
    }
     //ทำการลิ้งไปยัง URL ที่ไว้สำหรับการ share ของ facebook
    let url = 'https://www.facebook.com/sharer/sharer.php'+facebookParameters;
    Linking.openURL(url).then((data) => {
      alert('Facebook Opened');
    }).catch(() => {
      alert('Something went wrong');
    });
  }
  render() {
    return (
    //รับค่า content ต่าง ๆ เพื่อนำสิ่งเหล่านั้นไปแชร์ใน facebook
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 30}}>
          Example to share on Facebook from React Native App
        </Text>
        <Text style={{marginTop: 20}}>
          Enter Facebook Post Content
        </Text>
        <TextInput
          value={this.state.FacebookShareMessage}
          onChangeText={FacebookShareMessage => this.setState({ FacebookShareMessage })}
          placeholder={'Enter Facebook Post Content'}
          style={styles.input}
        />
        <Text style={{marginTop: 20}}>
          Enter URL to share
        </Text>
        <TextInput
          value={this.state.FacebookShareURL}
          onChangeText={FacebookShareURL => this.setState({ FacebookShareURL })}
          placeholder={'Enter URL to share'}
          style={styles.input}
        />
        <View style={{marginTop:20}}>
          <Button
            onPress={this.postOnFacebook}
            title= 'Share on Facebook'
            />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    padding: 30,
    backgroundColor: '#ffffff',
  },
 input: {
   width:'100%',
   height: 44,
   padding: 10,
   backgroundColor: '#D3D3D3',
 },
});

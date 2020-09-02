// This is an Example to Share Post on Facebook from React Native App
import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput, Button } from 'react-native';

let facebookParameters = ""

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FacebookShareURL: 'https://aboutreact.com',
      FacebookShareMessage: 'Hello Guys, This is a testing of facebook share example',
    };
  }
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
    let url = 'https://www.facebook.com/sharer/sharer.php'+facebookParameters;
    Linking.openURL(url).then((data) => {
      alert('Facebook Opened');
    }).catch(() => {
      alert('Something went wrong');
    });
  }
  render() {
    return (
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
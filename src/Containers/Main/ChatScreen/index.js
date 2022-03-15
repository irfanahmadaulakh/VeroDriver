import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import { Image, ScrollView, Text, View, StyleSheet, Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Icon from 'react-native-vector-icons/FontAwesome'
import { WP } from '@/Theme/Responsive'
import { Colors } from '@/Theme/Variables'
import { APIRequest } from '@/Services/ApiRequest'
import { Config } from '@/Config'
import {  useSelector } from 'react-redux'
import database from '@react-native-firebase/database'
import { VeroHeader } from '@/Components'

const ChatScreen = props => {
  console.log('shwoing value sin ', props)
//   const { name, from_user, receiver_id,latestMessage,_id} = params
  const { Layout, Gutters, Fonts, Images } = useTheme()
  const [username, setUsername] = useState()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [messages, setMessages] = useState([])
  const [demoMessages,setDemoMessage]= useState([])
  const [loading, setLoading] = useState(false)
  const user = useSelector(state => state.user.user)

  console.log('showing values of user is',user);

//   useEffect(() => {
//     const ref = database().ref(`/MESSAGE_THREADS/${params._id}`)
//     const listener = ref.on('value', snapshot => {
//       console.log("(showing values are snapshot",snapshot.val());
//       setMessages(snapshot.val()?.messages)
//     })
//     return () => ref.off('value', listener)
//   }, [database()])


    const onSend = async (message)=>{
    // message.map((msg)=>{
    //   msg.touser = receiver_id
    // })
    await setMessages(previousMessages => GiftedChat.append(previousMessages, message))
    setLoading(true)
  }

  useEffect(()=>{
    if(loading){
      database().ref().child('purchases_location').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          console.log("Chat is sentt", childSnapshot.val())
        })
      }
      // .update({
      //  messages:messages
      // },
      )}
    setLoading(false)
  }, [loading && messages])


  
  function renderBubble(props) {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: Colors.grey,
          },
          left: {
            backgroundColor: Colors.orange,
          },
        }}
        textStyle={{
          right: {
            color: '#272727',
          },
          left: {
            color: '#fff',
          },
        }}
      />
    )
  }
  function renderSend(props) {
    return (
      <Send {...props}>
        <Icon name="send" size={20} color={Colors.darkGrey}/>
      </Send>
    )
  }
  console.log('sadhadjhasdjha', messages)

  return (
    <View style={Layout.fill}>
      <VeroHeader title="Chat"/>
      <Image style={styles.avatar} source={Images.profile} />
      <Text style={styles.name}>{`${'Name not found!'}`}</Text>
      <GiftedChat
        messages={messages}
        //   textInputStyle = {{backgroundColor:'red'}}
        renderBubble={renderBubble}
        showUserAvatar={false}
        onSend={messages => onSend(messages)}
        renderSend={renderSend}
        renderAvatar={() => null}
        containerStyle={styles.containerStyle}
        // user={{
        //   _id: user?.id,
        // }}
      />
      <View style={styles.chatMargin}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  name: {
    color: Colors.grey,
    fontSize: WP('5'),
    alignSelf: 'center',
  },
  send: {
    width: WP('5'),
    height: WP('5'),
    resizeMode: 'contain',
  },
  avatar: {
    height: WP('25'),
    width: WP('25'),
    resizeMode: 'cover',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: WP('5'),
  },
  bottomMargin: {
    marginBottom: WP('20'),
  },
  containerStyle: {
    borderTopWidth: 0,
    marginRight: WP('8'),
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginLeft: WP('8'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatMargin: {
    marginBottom: WP('3'),
  }
})

export default ChatScreen
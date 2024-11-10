import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';
import '../App.css';
import StartSlow from './StartSlow';
import ButtonMenuList from './ButtonMenuList';

const botName = 'Kira';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`,{
    widget:"StartBtn",
  })],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#3b9798',
    },
    chatButton: {
      backgroundColor: '#3b9798',
    },
  },
  customComponents: {
    botAvatar: (props) => React.createElement(Avatar, props),
  },
  widgets:[
    {
        widgetName: "StartBtn",
        widgetFunc: (props) => React.createElement(StartBtn,props),
    },
    {
        widgetName: "ButtonMenuList",
        widgetFunc: (props) => React.createElement(ButtonMenuList,props),
    }
  ]
};

export default config;


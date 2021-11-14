import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'Nirmalya',
  initialMessages: [
    createChatBotMessage('Hey, its Nirmalya the developer would you want to know more about me drop a hi', {
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#0d46b9',
      color: 'black',
      
    },
    chatButton: {
      backgroundColor: '#f3e565',
      color: 'black',
    },
  },
};

export default config;

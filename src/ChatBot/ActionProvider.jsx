import React from 'react';
import '../App.css';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const afterNameMessage = () => {
      const message = createChatBotMessage('Hey there,I am kira.\nLet me tell you about me that,I am an personal assistance of Mr.Khushal Prajapati.\nSo you are able to ask about him self only,Now ask me your question about my superior.',{
        widget:'ButtonMenuList'
      });
      updateState(message);
    }

    const initialAction = () => {
      const message = createChatBotMessage('Just tell me your name to begin.');
      updateState(message,"Name");
    }

    const ExitChatAction = () => {
      const message = createChatBotMessage('Nice to chat with you,I hope you get all answer about my master.');
      updateState(message,"Exit");
      updateState('');
    }

    const Question1 = () => {
      const message = createChatBotMessage('Khushal Prajapati has a well-rounded skill set in both front-end and back-end web development. Proficient in HTML, CSS, JavaScript, and Bootstrap, they create responsive and visually engaging user interfaces. Their expertise extends to React.js for dynamic front-end applications and Node.js with MongoDB and SQL for robust back-end solutions. Additionally, Khushal has experience with PHP, enabling versatile full-stack development. This blend of skills reflects a strong foundation in modern web technologies.',{
        widget:'ButtonMenuList'
      });
      updateState(message);
    }

    const Question2 = () => {
      const message = createChatBotMessage('Khushal Prajapati completed their 12th grade (Higher Secondary School) from VPJ High School and is currently in the final semester of their Bachelor of Computer Applications (BCA). With a strong foundation in computer science, they are focused on advancing their skills in technology and software development.',{
        widget:'ButtonMenuList'
      });
      updateState(message);
    }

    const Question3 = () => {
      const message = createChatBotMessage('Khushal Prajapati’s coding journey began with small projects like a calculator and a number guessing game, which laid the groundwork for tackling more complex challenges. Building on these basics, Khushal developed medium-level projects, including a university site and an Ajay Modi Travels website, as well as a Spotify clone—each of these crafted using Bootstrap for responsive design. Currently, they are working on an e-commerce platform using React.js, which has deepened their expertise in front-end development. This journey started with self-guided learning on YouTube, where Khushal began honing their skills and expanding their knowledge in web development.',{
        widget:'ButtonMenuList'
      });
      updateState(message);
    }

    const updateState = (message,checker = "") => {
      setState((prev) => ({
        ...prev,
        messages:[ ...prev.messages,message ],
        checker
      }))
    }

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            Question1,
            Question2,
            Question3,
            afterNameMessage,
            handleHello,
            ExitChatAction
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
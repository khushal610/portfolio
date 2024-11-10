import React from 'react';
import '../App.css';

const MessageParser = ({ children, actions }) => {
//   const parse = (message) => {
//     console.log(message);
//   };
    console.log(children);
    const parse = (message) => {
        if (message.includes('hello')) {
            actions.handleHello();
            console.log('hi');
        }

        if(children.props.state.checker == "Name"){
          actions.afterNameMessage();
        }

        if(children.props.state.checker == "Exit"){
          actions.ExitChatAction();
        }

    };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
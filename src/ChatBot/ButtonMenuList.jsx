import React from 'react'

function ButtonMenuList(props) {

    const Question1 = () => {
        props.actions.Question1();
    }

    const Question2 = () => {
        props.actions.Question2();
    }

    const Question3 = () => {
        props.actions.Question3();
    }

    const ExitChatAction = () => {
        props.actions.ExitChatAction();
    }

  return (
    <>
    <div className='flex flex-wrap gap-2'>
        <button className='p-2 bg-blue-500 rounded-lg' onClick={() => Question1()}>
            About My Skills
        </button>        
        <button className='p-2 bg-blue-500 rounded-lg' onClick={() => Question2()}>
            About My Education
        </button>        
        <button className='p-2 bg-blue-500 rounded-lg' onClick={() => Question3()}>
            My Journey
        </button>        
        <button className='p-2 bg-blue-500 rounded-lg' onClick={() => ExitChatAction()}>
            !No Question
        </button>        
    </div>
    </>
  )
}

export default ButtonMenuList

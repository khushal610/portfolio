import React from 'react'

function StartBtn(props) {

  const initialAction = () => {
    props.actions.initialAction();
  }

  return (
    <div>
        <button className='p-2 bg-cyan-600 rounded-md text-white' onClick={() => initialAction()}>
            Let's get started
        </button>
    </div>
  )
}

export default StartBtn

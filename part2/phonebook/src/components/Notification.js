import React from 'react'

const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    border: '.02em solid green',
    padding: 10,
    margin: '10px 0px'
  }
  
  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    border: '.02em solid red',
    border_radius: 5,
    padding: 10,
    margin: '10px 0px'
  }

const Notification = ({message}) => {
    if (message === null) {
        return null
    }

    if (message.includes('Error')) {
        return (
            <div style={errorStyle}>
                {message}
            </div>
        )
    }

    else {
        return (
            <div style={successStyle}>{message}</div>
        )
    }
}

export default Notification
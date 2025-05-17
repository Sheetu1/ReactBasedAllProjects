import React from 'react'

const Button = ({children,Handler,text}) => {
  return (
    <div>
        {children}
        <button onClick={Handler}>
            {text}

        </button>
    </div>
  )
}

export default Button
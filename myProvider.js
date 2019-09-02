import React from 'react'

const myProvider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        margin: 16,
      }}
    >
      Put your name here
    </div>
  </div>
)

export default {
  myProvider,
}

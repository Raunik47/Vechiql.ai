import React from 'react'

const MainlLayout = ({children}) => {
  return (

    // this is the div where we will render the children
    <div className='container 
     mx-auto my-32'>{children}</div>
  )
}

export default MainlLayout;
import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
  
    return(
      <div>
        {parts.map(item => 
          <p key={item.id}><Part item={item} /></p>
        )}
      </div>
    )
  }

  export default Content
import React from 'react';
import Picture from './Picture';
import Numbers from './Numbers'
const Wrapper = props => {
  return (
    <div>
      <Numbers />
      <Picture title="Look at this Picture!" source = 'https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'/>
    </div>

  )
}

export default Wrapper;

import React from 'react'


const RequirementsBox = props => {
  return(
    <div>
      <ul>
        <li className={props.classN} onClick={props.setSelected}>
          {props.name}
        </li>
      </ul>
    </div>
  )
}
export default RequirementsBox;

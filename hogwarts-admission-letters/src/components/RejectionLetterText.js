import React from 'react';

const RejectionLetterText = (props) => {
  let p1
  if (!props.accepted)
  {
    p1 = "We regret to inform you that we are unable to offer you a place at Hogwarts School of Witchcraft and Wizardry. After reviewing your application and GitHub profile, we recognize that you are indeed a 'coding wizard.' Unfortnately, we have concluded that you do not have actual magical abilities, which you must have to be admitted into Hogwarts.";
  }
  return (
    <div>
      <div>
        <p>
          {p1}
        </p>
      </div>
    </div>
  );
}

export default RejectionLetterText;

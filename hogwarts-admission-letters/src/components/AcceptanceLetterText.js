import React from 'react';

const AcceptanceLetterText = props => {

  let p1;
  let p2;
  if (props.accepted)
  {
    p1 = "We are pleased to inform you that you have a place at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment.";
    p2 = "Term begins on 1 September. We await your email reply by no later than 31 July.";
  }
  return (
    <div>
      <div>
        <p>
          {p1}
        </p>
        <p>{p2}</p>
      </div>
    </div>
  );
}

export default AcceptanceLetterText;

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MyPopup = ({message, position}) => (
  <Popup
    trigger={<button className='my-popup'>Trigger Popup</button>}
    position={position}
  >
    {message}
  </Popup>
);

export default MyPopup;
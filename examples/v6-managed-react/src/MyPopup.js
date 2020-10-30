import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MyPopup = ({message, position}) => (
    <div className='my-popup' style={{margin: '50px'}}>
        <Popup
            trigger={<button>Trigger Popup</button>}
            position={position}
        >
            {message}
        </Popup>
    </div>
);

export default MyPopup;
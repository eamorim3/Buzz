import react from 'react';
import Button from './Button';

export default function AddFormsButton({ onAdd, showAdd }) {
  
    return (
        <div className='button-right-container'>
          <Button className='form-button'
            color={showAdd ? 'red' : '#129439'}
            text={showAdd ? 'Cancel' : 'Add'}
            onClick={onAdd}
          />
        </div>
    )
  }
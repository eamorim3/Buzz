import react from 'react';
import Button from './Button';

export default function AddFormsButton({ onAdd, showAdd }) {
  
    return (
          <Button
            color={showAdd ? 'red' : 'green'}
            text={showAdd ? 'Cancel' : 'Add'}
            onClick={onAdd}
          />
    )
  }
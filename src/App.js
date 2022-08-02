import React, { useState } from 'react';
import './App.css';


/**
 * Switch these next two lines to chanfe between mui v4 and mui v5
 * Line 9 is mui v4, line 10 is mui v5
 */
import { Button, Dialog } from '@material-ui/core';
// import { Button, Dialog, TextField } from '@mui/material';

import SquareACHWidget from './SquareACHWidget'

const App = () => {
  const [selection, setSelection] = useState(null);

  if(selection === null){
    return (
      <>
        <Button variant="contained" onClick= {() => {
          setSelection("dialog")
        }}>
          With Dialog
        </Button>

        <Button variant="contained" onClick= {() => {
          setSelection("no dialog")
        }}>
          Without Dialog
        </Button>
      </>)
  }
  else if( selection === "dialog"){
    return(
      <Dialog open>
        <SquareACHWidget />
      </Dialog>
    )
  }
  else{
    return (
      <SquareACHWidget />
    );
  }
}

export default App;

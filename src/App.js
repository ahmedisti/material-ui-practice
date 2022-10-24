import {Button , Typography} from '@mui/material';

import { Add , Settings } from '@mui/icons-material';
import styled from '@emotion/styled';

function App() {

  const BlueButton = styled(Button)({ //blue button component
    backgroundColor :'skyblue',
    color:'#888',
    margin:5,
    '&:hover':{
      backgroundColor:'lightblue'
    },
    '&disabled':{
      backgroundColor:'gray',
      color:'white'
    }
  });
  return (
    <div>
<Button variant="text">Text</Button>
<Button startIcon={<Settings />} variant="contained" color="secondary" size="small">Setting</Button>
<Button startIcon={<Add />} variant="contained" color="success" size="small">Add</Button>
<Button variant="outlined" disabled>Outlined</Button>
<Typography variant="h1" component="p">
  I am p but style is H1
</Typography>;
<BlueButton>Blue</BlueButton>
<BlueButton>red</BlueButton>
    </div>
  );
}

export default App;

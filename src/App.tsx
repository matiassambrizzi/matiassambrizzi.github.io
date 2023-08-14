import {Stack} from '@mui/system';
import {Resume} from './components/Resume/Resume';
import {matiDataSpanish} from './data';

function App() {
  return (
    <Stack 
      alignItems="center" 
      justifyContent={"center"}
    >
      <Resume data={matiDataSpanish} />
    </Stack>
  );
}

export default App;

import { Stack, CircularProgress } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Weather from './components/Weather/Weather';
import { getCurrentPosition } from './redux/actions';

function App() {

      const dispatch = useDispatch();
      const position = useSelector(state => state.currentPosition)

      useEffect(() => {
            dispatch(getCurrentPosition());
      }, [])
      return (
            <Stack
                  flexDirection={{ base: "column", lg: "row" }}
                  alignItems="flex-start"
                  height="100vh"
                  fontFamily="commissioner"
                  id="App">
                  {position.latitude
                        ?
                        <Weather position={position} />
                        :
                        <Stack
                              height="100vh"
                              width="100vw"
                              bg="brand.dOcBl"
                              color="brand.stBl"
                              alignItems="center"
                              justifyContent="center"
                        >
                              <CircularProgress size='80px' isIndeterminate />
                        </Stack>
                  }
            </Stack>
      )
}

export default App

import { Stack, Text } from '@chakra-ui/react'
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
            <Stack flexDirection="row" alignItems="flex-start" height="100vh" fontFamily="heebo">
                  {position.latitude
                        ?
                        <Weather position={position} />
                        :
                        <Text>Loading</Text>
                  }
            </Stack>
      )
}

export default App

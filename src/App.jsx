import { Stack } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Detail from './components/Detail/Detail'
import Overview from './components/Overview/Overview'
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
                  <Weather position={position} />
            </Stack>
      )
}

export default App

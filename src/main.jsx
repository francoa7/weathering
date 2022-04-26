import React from 'react'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import axios from 'axios'
import "@fontsource/alef"
import "@fontsource/baloo-paaji-2"
import "@fontsource/commissioner"
import "@fontsource/cooper-hewitt"
import "@fontsource/heebo"




const colors = {
      brand: {
            lgBl: '#508EFA',
            frBl: '#004AC9',
            ocBl: '#1D2E4D',
            dOcBl: '#112038',
            stBl: '#B9CBEB',
      },

}

const theme = extendTheme({
      colors, fonts: {
            alef: "Alef, sans-serif",
            baloo: "Baloo Paaji 2, sans-serif",
            commissioner: "Commissioner, sans-serif",
            cooper: "Cooper Hewitt, sans-serif",
            heebo: "Heebo, sans-serif"
      }
})

const root = createRoot(document.getElementById("root"));
root.render(
      <Provider store={store}>
            <React.StrictMode>
                  <ChakraProvider theme={theme}>
                        <App />
                  </ChakraProvider>
            </React.StrictMode>
      </Provider>
);



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Dùng Routes thay vì Switch
import Dashboard from '../pages/Dashboard/Dashboard';
import Appointment from '../pages/Dashboard/Appointment';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import store from './store';


const cache = createCache({ key: 'css' });

const App = () => {
  return (
    <Provider store={store}> {/* Redux store */}
      <CacheProvider value={cache}> {/* Css cần tiềm hiểu về CSP */}
        <SnackbarProvider maxSnack={5}> {/* Hiện thông báo đối đa 5 */}
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/appointment" element={<Appointment />} />
              
            </Routes>
          </Router>
        </SnackbarProvider>
      </CacheProvider>
    </Provider>
  );
};

export default App;
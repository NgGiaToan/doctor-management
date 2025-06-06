import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Dùng Routes thay vì Switch
import Dashboard from '../pages/Dashboard/Dashboard';
import HomePage from '../pages/HomePage/HomePage';
import MyPatients from '../pages/MyPatients/MyPatients';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import store from './store';
import { Navigate} from 'react-router-dom';



const cache = createCache({ key: 'css' });

const App = () => {
  return (
    <Provider store={store}> {/* Redux store */}
      <CacheProvider value={cache}> {/* Css cần tiềm hiểu về CSP */}
        <SnackbarProvider maxSnack={5}> {/* Hiện thông báo đối đa 5 */}
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mypatients" element={<MyPatients />} />
            </Routes>
          </Router>
        </SnackbarProvider>
      </CacheProvider>
    </Provider>
  );
};

export default App;
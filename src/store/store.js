import { configureStore } from '@reduxjs/toolkit';
import Authslice from './slice'; 
const store = configureStore({
  reducer: {
    auth: Authslice, 
  },
});

export default store; 

import { configureStore } from '@reduxjs/toolkit';
import  sliderSlice  from '../features/Slider/SliderSlices';


export const store = configureStore({
  reducer: {
    slider:sliderSlice
  },
});

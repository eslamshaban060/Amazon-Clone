// Custom typed Redux hooks for use throughout the application
// These provide type safety when using Redux with TypeScript

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Custom typed dispatch hook
// Use this instead of plain useDispatch for automatic TypeScript support
// Returns a dispatch function that knows about all available actions
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom typed selector hook  
// Use this instead of plain useSelector for automatic TypeScript support
// Provides IntelliSense for the state structure and ensures type safety
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
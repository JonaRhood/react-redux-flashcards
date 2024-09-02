import { isImmutable } from 'immutable';


export const loadState = () => {
    try {
      const serializedData = localStorage.getItem('state');
      if (serializedData === null) {
        return undefined; 
      }
      return JSON.parse(serializedData); 
    } catch (error) {
      console.error('Error loading state from localStorage:', error);
      return undefined;
    }
  };


export const saveState = (state) => {
  try {
    const serializedData = isImmutable(state) ? JSON.stringify(state.toJS()) : JSON.stringify(state);
    localStorage.setItem('state', serializedData);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

const logger = store => next => action => {
    console.group(action.type);
    console.log('Prev state: ', store.getState());
    console.log('action: ', action);
    next(action);
    console.log('New state: ', store.getState());
    console.groupEnd();
  };
  
  export default logger;
  
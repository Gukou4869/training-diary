// DEV ONLY
const logger = (store: any) => (next: any) => (action: any) => {
    console.group(action.type);
    console.log('The action: ', action);
    const result = next(action);
    console.log('The new state: ', store.getState());
    console.groupEnd();
    return result;
};

export default logger;

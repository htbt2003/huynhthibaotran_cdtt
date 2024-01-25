export const localStorageMiddleware = store => next => action => {
    const result = next(action);
  
    // Lưu toàn bộ trạng thái vào localStorage
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  
    return result;
  };
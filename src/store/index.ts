import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer, { RootState } from '../reducers';

export function configureStore(initialState?: RootState): Store<RootState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const loggerMiddleware = createLogger();

  const createStoreWithMiddleware = applyMiddleware(thunk, loggerMiddleware)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

import { createStore } from "redux";
import { rootRducer } from "./reducers";

export const reduxStore = createStore(
    rootRducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
);
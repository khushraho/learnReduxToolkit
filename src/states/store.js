import { configureStore } from "@reduxjs/toolkit";

import incdecSlice from "./reducers/incdecSlice";

export default configureStore({
  reducer: {
    number: incdecSlice,
  },
});

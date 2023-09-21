import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";

 

const { configureStore } = require("@reduxjs/toolkit");

  export default configureStore({
    reducer:{
        cart:CartReducer,
        product:ProductReducer
    }
  })
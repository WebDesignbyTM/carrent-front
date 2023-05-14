import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginView from "./views/LoginView";
import SignUp from "./views/SignUp"
import CryptoMinor from "./views/CryptoMinor";
import {createTheme} from "@mui/material/styles";
import Navbar from "./components/Navbar";
import CustomersView from "./views/CustomersView";
import {Provider} from "react-redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

const theme = createTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>
  },
  {
    path: "/home",
    element: <div>Welcome Home!</div>
  },
  {
    path: "/login",
    element: <LoginView theme={theme}/>
  },
  {
    path: "/signup",
    element: <SignUp theme={theme}/>
  },
  {
    path: "/nasolbro",
    element: <CryptoMinor theme={theme}/>
  },
  {
    path: "/customers",
    element: <CustomersView theme={theme}/>
  }
]);

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "NO TOKEN"
  },
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload
    },
    resetToken: state => {
      state.token = ""
    }
  }
});

export const { storeToken, resetToken } = tokenSlice.actions;

const store = configureStore({
  reducer: tokenSlice.reducer
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar theme={theme}/>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;

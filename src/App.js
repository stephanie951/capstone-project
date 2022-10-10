import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
const Shop = () => {
  return (
    <h1>this is the shop</h1>
  );
};

const App = () => {
  return (
    <Routes>
    <Route path='/' element={  <Navigation/>}>
      <Route index element={  <Home />}/>
      <Route path='Shop'element={  <Shop />}/>
      <Route path='Sign-in'element={  <SignIn />}/>
    </Route>
    
    </Routes>
  );
};

export default App;

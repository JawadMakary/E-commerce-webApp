import "./Styles/styles.css";
import { Route, Switch, useHistory } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AdminScreen from "./Screens/AdminScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProductScreen from "./Screens/ProductScreen";
import CheckoutScreen from "./Screens/CheckoutScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import SignUpScreen from "./Screens/SignUpScreen";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/LoginScreen" component={LoginScreen} />
        <Route path="/AdminScreen" component={AdminScreen} />
        <Route path="/ProductScreen" component={ProductScreen} />
        <Route path="/checkout" component={CheckoutScreen} />
        <Route path="/PaymentScreen" component={PaymentScreen} />
        <Route path="/SignUpScreen" component={SignUpScreen} />
      </Switch>
    </div>
  );
}

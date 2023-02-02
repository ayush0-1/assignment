import {BrowserRouter, Route,Switch} from 'react-router-dom';

//components

import Header from './Components/header/header';
import DropdownList from './Components/Home/Home';
import Cart from './Components/Cart/cart';
// import { TemplateProvider } from './templates/TemplateProvider';

function App() {
  return (
    // <TemplateProvider >
      <BrowserRouter>
       <Header/>
        <Switch>
          <Route path="/" component={DropdownList} exact/>
          <Cart path="/cart" component={Cart} exact/>
        </Switch>
      </BrowserRouter>
    // </TemplateProvider>
      
  );
}

export default App;

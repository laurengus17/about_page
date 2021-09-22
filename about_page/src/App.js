import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path='/about' exact={true}>

        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;

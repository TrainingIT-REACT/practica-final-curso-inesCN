import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Home from './Home';
import SidebarMenu from './SidebarMenu/sidebarMenu';
import * as serviceWorker from './serviceWorker';
import { Grid } from 'semantic-ui-react';

ReactDOM.render(
  <main>
    <Grid>
      <Grid.Row>
         <Grid.Column width={5} className="floatleft">
          <SidebarMenu />
        </Grid.Column>
        <Grid.Column width={12} className="floatrigth">
          <Home  />
        </Grid.Column>
      </Grid.Row>

    </Grid>

  </main>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

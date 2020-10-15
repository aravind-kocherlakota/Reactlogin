import React from 'react';
import NavBar from './Components/NavBar';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from './Components/Views/Login';
import SignUp from './Components/Views/SignUp';
import Home from './Components/Views/Home';

const { Content } = Layout;

function App() {
  return (
    
    <div className="App">
      <Layout>
        <NavBar />


        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: "100 %",
            margin: "auto"
          }}
        >
          <Router>
          <Switch>
          <Route exact path="/">
          <Login />
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          </Switch>
          </Router>

        </Content>


      </Layout>
    </div>
  );
}

export default App;

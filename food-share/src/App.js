import React, {Component} from 'react';
import {HashRouter,Route,Redirect} from 'react-router-dom'
import loadable from './utils/loadable'
// const Login = loadable(()=>import('./pages/Login'))
const Admin = loadable(()=>import('./pages/Admin'))
// const Administrator = loadable(()=>import('./pages/Administrator'))
// const User = loadable(()=>import('./pages/User'))
// const Menu = loadable(()=>import('./pages/Menu'))
const MenuTypesList = loadable(()=>import('./pages/MenuTypes/MenuTypesList'))
const MenuTypesAdd = loadable(()=>import('./pages/MenuTypes/MenuTypesAdd'))

class App extends Component{
  render() {
    return (
      <HashRouter>
        <Redirect exact from='/' to ='/admin'></Redirect>
        {/* <Route path='/login' component={Login}></Route> */}
        <Route path='/admin' render={()=>{
          return (
            <Admin>
                {/* <Route path='/admin/administrator' component={Administrator}></Route> */}
                {/* <Route path='/admin/user' component={User}></Route> */}
                {/* <Route path='/admin/menu' component={Menu}></Route> */}
                <Route exact path='/admin/menutypeslist' component={MenuTypesList}></Route>
                <Route exact path='/admin/menutypesadd' component={MenuTypesAdd}></Route>
            </Admin>
          )
        }}></Route>
      </HashRouter>
    )
  }
}

export default App;

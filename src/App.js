import './App.css'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
// import AddNewsPage from './pages/AddNews'
// import DeleteNewsPage from './pages/Deletenews'
// import UserManPage from './pages/UserManagement'
import Dashboard2 from './pages/Dashboard2'
import {BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";



function App() {
return (
    <div>
      <Router>
        <Switch>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/' component={Home}/>
          {/* <Route path='/add news' component={AddNews}/>
          <Route path='/delete news' component={DeleteNews}/>
          <Route path='/user management' component={UserManangement}/> */}
          <Route path='/dashboard2' component={Dashboard2}></Route>
       
        </Switch>
        </Router>


      

    </div>
  );
}


export default App;



















    // <div className="container">

    //     <RegisterHeader></RegisterHeader>

    //     <InputField lable='Name' className='ml'></InputField>
    //     <InputField lable='Mobile Number' id="main"></InputField><br></br><br></br>
    //     <InputField lable='USN' id='text'></InputField>
    //     <InputField lable='Password'></InputField><br></br><br></br>
    //     <SimpleSelect name="Branch"></SimpleSelect>
    //     <SimpleSelect name="Division"></SimpleSelect>
    //     <SimpleSelect name="sem"></SimpleSelect>

    //     <SubmitButton></SubmitButton>
    //   </div>
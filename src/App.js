import './App.css'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import AddNewsPage from './pages/AddNews'
import DeleteNewsPage from './pages/Deletenews'
import UserManPage from './pages/UserManagement'
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";



function App() {
return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' render={(props)=><Home {...props}></Home>}/>
          <Route exact path='/signin' render={(props)=><SignIn {...props}></SignIn>}/>
          <Route exact path='/signup' render={(props)=><SignUp {...props}></SignUp>}/>
          <Route exact path='/admin' render={(props)=><Admin {...props}></Admin>}/>
          <Route exact path='/admin/dashboard' render={(props)=><Dashboard {...props}></Dashboard>}/>         
          <Route exact path='/admin/addnews' render={(props)=><AddNewsPage {...props}></AddNewsPage>}/>
          <Route exact path='/admin/deletenews' render={(props)=><DeleteNewsPage {...props}></DeleteNewsPage>}/>
          <Route exact path='/admin/usermanagement' render={(props)=><UserManPage {...props}></UserManPage>}/> 
       
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
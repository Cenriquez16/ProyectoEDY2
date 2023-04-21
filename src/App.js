import { Route, Routes } from "react-router-dom";
import AuthContext from "./components/store/auth-context";

import SimpleInput from './components/SimpleInput';
import RegisterForm from './pages/RegisterForm'
import Login from './pages/Login'
import Dasboard from './pages/Dashboard';
import Layout from "./Layout/Layout";
import { useContext } from "react";


function App() {
  const authCtx = useContext(AuthContext)
  console.log(authCtx.isLoged)
  return (
    <Layout>
      <Routes>
        {/* <Route path='/' exact>
            <Redirect to='/notas'/>
        </Route> */}

        
        
        <Route path="/*" element={<Login />}></Route>
        <Route path='/register' element={<RegisterForm/>} />
        <Route path='/register2' element={<SimpleInput />} />
        <Route path='/login' element={<Login />} />
        {authCtx.isLoged && <Route path='/dashboard' element={<Dasboard />} />}

              
        {/* <SimpleInput /> */}
        {/* <BasicForm/> */}
        {/* <Login /> */}
        
      </Routes>
    </Layout>
  );
}

export default App;

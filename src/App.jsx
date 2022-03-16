import React, { useState } from 'react';
import Form from './components/Form'

function App() {
  const dbUser = {
    name: "Admin",
    email: "admin@admin.com",
    password: "123admin"
  }

  const [user, setUser] = useState({name:"", password:""})
  const [error, setError] = useState("")

  const Login = data =>{
    //console.log(data)
    if(data.email === dbUser.email && data.password === dbUser.password){      
      setUser({
        email: data.email
      })
    }else{
      setError("ERrooooU!")
    }
  }

  const Logout = () =>{
    setUser({
      email: "",
      password: ""
    })
    setError("")
  }

  return (
    <div>
      {(user.email !== "" && user.password !== "") ? (
        <div>
          <h1>Olá <span>{dbUser.email}</span></h1>
          <button onClick={Logout}>Sair</button>
        </div>
      ):(
        <Form Login={Login} error={error}/>
      )
      }     
    </div>
  );
}

export default App;

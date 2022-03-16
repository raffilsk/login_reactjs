import { useState } from 'react';
import MyForm from "./styles.js"

export default function Form({ Login, error }) {
   const [data, setData] = useState({email: "", password: ""});

   const handleSubmit = e => {
      e.preventDefault();

      Login(data)
   }

   return (
      <MyForm onSubmit={handleSubmit}>
         <h1>Login</h1>
         {(error !== "") ? ( <h2>{error}</h2>): ""}
         <div>
            <label htmlFor="email">Email</label>
            <input
               type="email"
               name="email"
               id="email"
               onChange={e => setData({...data, email: e.target.value})}
               value={data.email}
               placeholder="Digite seu Email"
            />
         </div>
         <div>
            <label htmlFor="passaword">Senha</label>
            <input
               type="password"
               name="password"
               id="password"
               onChange={e => setData({...data, password: e.target.value})}
               value={data.password}
               placeholder="Digite sua Senha" />
         </div>
         <div>
            <button>Entrar</button>
         </div>
      </MyForm>
   )
}
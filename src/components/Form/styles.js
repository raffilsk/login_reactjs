import styled from 'styled-components'

const MyForm = styled.form`
display: flex;
flex-direction: column;
row-gap: 0.5rem;
background: #DEDEDE;

width: 20rem;
padding: 1rem;
align-items: center;
border-radius: 1rem;

font-family: Helvetica, sans-serif;

h1{
   color: #111111;
}

div{
   display: flex;
   flex-direction: column;
   position: relative;
   
   label{      
      line-height: 2rem;      
   }
   input{
      border: 1px solid gray;
      border-radius: 0.25rem;
      height: 2rem;
      padding-left: 0.5rem;
   }
   
   button{
      background: #237723;
      color: white;
      width: 11rem;
      height: 2rem;
      border-radius: 0.5rem;
      margin: 1rem auto;
      font-size: 1rem;
   }
   
}
`

export default MyForm;
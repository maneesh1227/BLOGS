import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const FormField = styled.div`
  margin-bottom: 15px;
`

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

`

export const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`
export const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:100vh;
  width:100vw;
`

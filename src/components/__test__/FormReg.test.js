import {screen,render} from '@testing-library/react'
import RegForm from '../RegForm'

describe('Form',()=>{
    it('Fullname input should be empty by default',()=>{
        render(<RegForm/>)
        const fullNameElement=screen.getByPlaceholderText(/fullname/i)
        expect(fullNameElement).toBeInTheDocument()
        expect(fullNameElement.value).toBe("")
    })

    it('Email input should be empty by default',()=>{
        render(<RegForm/>)
        const emailElement=screen.getByPlaceholderText(/email address/i)
        expect(emailElement).toBeInTheDocument()
        expect(emailElement.value).toBe("")
    })

    it('Password input should be empty by default',()=>{
        render(<RegForm/>)
        const passwordElement=screen.getByPlaceholderText("Password")
        expect(passwordElement).toBeInTheDocument()
        expect(passwordElement.value).toBe("")
    })

    it('ConfirmPassword input should be empty by default',()=>{
        render(<RegForm/>)
        const confirmPasswordElement=screen.getByPlaceholderText("Confirm Password")
        expect(confirmPasswordElement).toBeInTheDocument()
        expect(confirmPasswordElement.value).toBe("")
    })
   
})
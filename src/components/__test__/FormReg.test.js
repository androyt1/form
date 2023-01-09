import {screen,render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useEvent from '@testing-library/user-event'
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

    it('FullName Input Should change value when user types in',()=>{
        render(<RegForm/>)
        const fullNameElement=screen.getByPlaceholderText(/fullname/i)
        userEvent.type(fullNameElement,'Aghoghovwia Andrew')
        expect(fullNameElement.value).toBe('Aghoghovwia Andrew')
    })
   
    it('Email Input Should change value when user types in',()=>{
        render(<RegForm/>)
        const emailElement=screen.getByPlaceholderText(/email address/i)
        userEvent.type(emailElement,'androyt1@gmail.com')
        expect(emailElement.value).toBe('androyt1@gmail.com')
    })

    it('Password Input Should change value when user types in',()=>{
        render(<RegForm/>)
        const passwordElement=screen.getByPlaceholderText("Password")
        userEvent.type(passwordElement,'peculiar')
        expect(passwordElement.value).toBe('peculiar')
    })

    it('Confirm Password Input Should change value when user types in',()=>{
        render(<RegForm/>)
        const cPasswordElement=screen.getByPlaceholderText("Confirm Password")
        userEvent.type(cPasswordElement,'peculiar')
        expect(cPasswordElement.value).toBe('peculiar')
    })
})
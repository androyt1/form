import {screen,render} from '@testing-library/react'
import Header from '../Header'

it('h1 Should contain Yello Kokoro!',()=>{
    render(<Header/>)
    const h1Element=screen.getByRole('heading',{name:/yello Kokoro!/i})
    expect(h1Element).toBeInTheDocument()
})
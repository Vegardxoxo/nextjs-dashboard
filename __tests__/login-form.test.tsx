import Page from "@/app/page";
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import LoginForm from "@/app/ui/login-form";


describe('page', () => {
    it('should render', () => {
        render(<LoginForm/>)
        const text = screen.getByText('Please log in to continue.')
        expect(text).toBeInTheDocument();
    })

})
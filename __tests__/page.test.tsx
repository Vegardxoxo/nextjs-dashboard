import Page from "@/app/page";
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'


describe('page', () => {
    it('should render', () => {
        render(<Page/>)
        const text = screen.getByText('Next.js Learn Course')
        expect(text).toBeInTheDocument();
    })

})
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Page from "@/app/dashboard/customers/page";






describe('Page Component', () => {
    it('renders the "Customer Pnage" text', () => {
        render(<Page/>);
        const text = screen.getByText('Customer Pnage');
        expect(text).toBeInTheDocument();
    });

});

import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet', () => {
    xit('Greet renders correctly', () => {
        render(<Greet/>)
        const textElement = screen.getByText('Harrrooo')
        expect(textElement).toBeInTheDocument()
    })
    describe('Nested', () => {
        fit('Greet renders with a name', () => {
            render(<Greet name='Enoki'/>)
            const textElement = screen.getByText('Harrrooo Enoki')
            expect(textElement).toBeInTheDocument()
        })
    })
})
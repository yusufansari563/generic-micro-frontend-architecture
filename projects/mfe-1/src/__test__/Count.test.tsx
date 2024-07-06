import { render, screen, fireEvent } from "@testing-library/react"
import Count from "../Count"

describe("Count methods",()=>{
    test('should first', () => { 
        render(<Count />);
        const element = screen.getByRole('countDiv');
        expect(element).toBeInTheDocument();
     })

     test('should increment', () => {
        render(<Count />);
        const element = screen.getByRole('countDiv');
        expect(element.textContent).toBe("0");
        
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(element.textContent).toBe("1");
     })

     
})
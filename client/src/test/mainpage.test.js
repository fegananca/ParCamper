import { render, fireEvent, screen, getByText } from '@testing-library/react';

import ButtonSearch from '../components/ButtonSearch';

describe('button hover', () => {
  it('should hover the button with the cursor', () => {
    render(<ButtonSearch />);
    //const buttonClass = ButtonSearch().type.styledComponentId;
    const buttonClassRoots = document.getElementByClassName('button-enter');
    console.log(buttonClassRoots);

    //const button = screen.getByRole('button', { name: 'Map' });
    const style = window.getComputedStyle(buttonClassRoots[0]);
    console.log(style);

    //fireEvent.mouseOver(button);
    // console.log(button);
    expect(style.opacity).toBe('0.6');
    //expect(button).toHaveClass('button-enter');
    // expect(button).toBeVisible();
  });
});

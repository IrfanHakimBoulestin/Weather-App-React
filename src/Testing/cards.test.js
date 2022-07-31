import {render, screen} from '@testing-library/react';
import Cards from "../Components/Cards/cards";

const mockOnClick = () => jest.fn()

test('Render Cards', () => {
  render(<Cards cardTitle="Test Title" cardSubHeader="Test Subheader" onclick={mockOnClick()} imageSvg={<svg></svg>} responseId="returnedResults"/>);
  expect( screen.getByText(/Test Title/) ).toBeTruthy()
  expect( screen.getByText(/Test Subheader/) ).toBeTruthy()
  expect( document.querySelector('.column')).toBeTruthy()
  expect( document.querySelector('.weather-card')).toBeTruthy()
  expect( document.querySelector('#returnedResults')).toBeTruthy()
});

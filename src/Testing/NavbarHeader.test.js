import {render, screen} from '@testing-library/react';
import NavbarHeader from '../Components/Meta/NavbarHeader';

test('Render Navbar Header', () => {
  render(<NavbarHeader />);
  expect( screen.getByText(/Weather App/) ).toBeTruthy()
});

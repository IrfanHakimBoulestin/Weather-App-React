import {render, screen} from '@testing-library/react';
import NavbarFooter from "../Components/Meta/NavbarFooter";

test('Render Navbar Footer', () => {
  render(<NavbarFooter />);
  expect( screen.getByText(/This is a private project which utilises the Weather API/) ).toBeTruthy()
  expect( screen.getByText(/For more information regarding the developer please visit/) ).toBeTruthy()
});

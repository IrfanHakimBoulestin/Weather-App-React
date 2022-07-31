import {render} from '@testing-library/react';
import BackendUp from "../Components/BackendUp";

test('API Response Indicates Database is down, render database down icon', () => {
    render(<BackendUp/>)
    expect( document.body.innerHTML.includes('backendDown')).toBeTruthy()
});
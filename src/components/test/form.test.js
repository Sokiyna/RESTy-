import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Form from '../form/index';

it('check if the function run on button click', async () => {
  let callApi = jest.fn();
  render(<Form handleApiCall={callApi} />);
  const button = screen.getByTestId('submitButton');
  fireEvent.click(button);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
});
// utils
import { axe, render, screen } from 'utils/testUtils';

// pages
import Home from 'pages/index';

const renderComponent = () => render(<Home />);

it('render correctly', async () => {
  const { container } = renderComponent();

  const results = await axe(container);

  expect(results).toHaveNoViolations();

  expect(screen.getByText('Lorem ultrices at nec in sit.')).toBeInTheDocument();
});

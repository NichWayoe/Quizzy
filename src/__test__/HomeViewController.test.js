/**
 * 
 */
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import HomeViewController from '../Controllers/HomeViewController.react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

describe('Test for the takeQuizComponent', () => {
  test('test for categories link', () => {
    render(
    <BrowserRouter>
    <HomeViewController />
    </BrowserRouter>);
    
    const categoryCard = screen.queryByText(/Politics/);
    expect(categoryCard).toBeNull();
  });
  it('renders correctly when there are quiz given items', () => {
    const tree = renderer.create(<BrowserRouter>
      <HomeViewController />
      </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

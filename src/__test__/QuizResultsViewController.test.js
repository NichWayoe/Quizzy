import QuizResultsViewController from '../Controllers/QuizResultsViewController.react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quiz from '../Model/Quiz.react';

  describe('Test for QuizResultsViewController', () => {
    let answers;
    let userAnswers;
  
    beforeAll(() => {
      answers = {1:2, 2:2, 3:1}
      userAnswers = {1:2, 2:3, 3:1}
    });  
    test('checks for correct score displayed', () => {
    render(<QuizResultsViewController answers={answers} userAnswers={userAnswers}/>)
    expect(screen.queryByText(/2/))
    });
   
    it('renders correctly when there are quiz given items', () => {
                    const tree = renderer.create(<QuizResultsViewController answers={answers} userAnswers={userAnswers}/>).toJSON();
                    expect(tree).toMatchSnapshot();
                  });

    it('renders correctly when there are no items', () => {
                    const tree = renderer.create(<QuizResultsViewController/>).toJSON();
                    expect(tree).toMatchSnapshot();
                  });
  });
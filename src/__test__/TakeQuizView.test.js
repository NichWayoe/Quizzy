import TakeQuizView from '../Views/TakeQuizView.react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quiz from '../Model/Quiz.react';

  describe('Test for the takeQuizComponent', () => {
    let quiz;
  
    beforeAll(() => {
      quiz = new Quiz("work and play", "Politics", "Nick", ["what", "Ama"], 2, {1:1, 2:1},{1:["WW","SS","SSS","ERR"], 2:["DAS","DSDS","DS","RE"]},60,"DDDS","YES THIS IS A QUIZ")
    });  
    test('this tests whether author is displayed', () => {
    render(<TakeQuizView quiz={[quiz]}/>)
    expect(screen.queryByText(/Nick/))
    });
    test('test for description shown', () => {
        render(<TakeQuizView quiz={[quiz]}/>)
        expect(screen.queryByText(/YES THIS IS A QUIZ/))
        });
    
    test('test for quiz title shown', () => {
            render(<TakeQuizView quiz={[quiz]}/>)
            expect(screen.queryByText(/work and play/))
            });
    test('test button for start quiz displayed', () => {
                render(<TakeQuizView quiz={[quiz]}/>)
                expect(screen.queryByText(/start/))
                });
    it('renders correctly when there are quiz given items', () => {
                    const tree = renderer.create(<TakeQuizView quiz={[quiz]}/>).toJSON();
                    expect(tree).toMatchSnapshot();
                  });

    it('renders correctly when there are no items', () => {
                    const tree = renderer.create(<TakeQuizView />).toJSON();
                    expect(tree).toMatchSnapshot();
                  });
  });
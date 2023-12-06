// Import necessary dependencies and the Card component
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../components/Card/Card';

// Describe the test suite
describe('<Card />', () => {
  // Test case: Test the "Next" button
  it('calls the onNext function when "Next" button is clicked', () => {
    // Mock the onNext function
    const mockOnNext = jest.fn();

    // Render the Card component with necessary props
    const { getByText } = render(
      <Card
        question={{ id: '1', question_text: 'Sample Question', answers: [] }}
        onNext={mockOnNext}
        currentQuestionPosition={0}
        isOptionSelected={false}
        position="1/5"
      />
    );

    // Find the "Next" button and click it
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);

    // Assert that the onNext function is called
    expect(mockOnNext).toHaveBeenCalled();
  });
});

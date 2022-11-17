import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { Component } from 'react';
import capitalize from './utils/capitalize';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  uiElements = Object.keys(this.state).map(capitalize);

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    const statValues = Object.values(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.uiElements}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics options={this.uiElements} values={statValues} />
        </Section>
      </>
    );
  }
}

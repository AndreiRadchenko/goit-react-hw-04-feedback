import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import { useState } from 'react';
import capitalize from './utils/capitalize';
import shortid from 'shortid';

const options = ['good', 'neutral', 'bad'];
const uiElements = options.map(btn => {
  return { name: capitalize(btn), id: shortid.generate() };
});

export const App = () => {
  const [good, setGood] = useState(() => 0);
  const [neutral, setNeutral] = useState(() => 0);
  const [bad, setBad] = useState(() => 0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = values => values.reduce((a, e) => (a += e));

  const countPositiveFeedbackPercentage = (good, totalFeedback) =>
    totalFeedback && Math.round((good / totalFeedback) * 100);

  const total = countTotalFeedback([good, neutral, bad]);
  const positivePercentage = countPositiveFeedbackPercentage(good, total);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={uiElements}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

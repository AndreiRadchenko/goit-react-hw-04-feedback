import css from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const uiElements = ['Good', 'Neutral', 'Bad', 'Total', 'Positive feedback'];
  const values = [good, neutral, bad, total, positivePercentage];

  return (
    <css.List>
      {uiElements.map((item, index) => (
        <css.Item key={item}>
          <p>
            {item}: {index !== 4 ? values[index] : values[index] + '%'}
          </p>
        </css.Item>
      ))}
    </css.List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

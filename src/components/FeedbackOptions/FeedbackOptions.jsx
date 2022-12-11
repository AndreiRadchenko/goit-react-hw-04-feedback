import css from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <css.List>
      {options.map(btn => {
        return (
          <css.Item key={btn.id}>
            <css.Button
              type="button"
              onClick={() => onLeaveFeedback(btn.name.toLowerCase())}
            >
              {btn.name}
            </css.Button>
          </css.Item>
        );
      })}
    </css.List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

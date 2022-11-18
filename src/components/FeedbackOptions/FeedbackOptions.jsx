import css from './FeedbackOptions.styled';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <css.List>
      {options.map(btnName => {
        const id = shortid.generate();
        return (
          <css.Item key={id}>
            <css.Button
              type="button"
              onClick={() => onLeaveFeedback(btnName.toLowerCase())}
            >
              {btnName}
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

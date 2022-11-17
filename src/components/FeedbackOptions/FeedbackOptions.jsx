import css from './FeedbackOptions.styled';
// import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <css.List>
      {options.map(btnName => (
        <li key={btnName}>
          <css.Button
            type="button"
            onClick={() => onLeaveFeedback(btnName.toLowerCase())}
          >
            {btnName}
          </css.Button>
        </li>
      ))}
    </css.List>
  );
};

export default FeedbackOptions;

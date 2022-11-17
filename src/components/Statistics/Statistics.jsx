import css from './Statistics.styled';
// import PropTypes from 'prop-types';

const Statistics = ({ options, values }) => {
  return (
    <css.List>
      {options.map((item, index) => (
        <li key={item}>
          <css.Item>
            {item}: {values[index]}{' '}
          </css.Item>
        </li>
      ))}
    </css.List>
  );
};

export default Statistics;

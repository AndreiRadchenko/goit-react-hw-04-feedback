import css from './Section.styled';
// import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <css.Section>
      <h1>{title}</h1>
      {children}
    </css.Section>
  );
};

export default Section;

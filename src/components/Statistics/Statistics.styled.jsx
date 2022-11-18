import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
`;

const Item = styled.li`
  font-size: 18px;
  line-height: calc(16 / 12);
  color: black;
  background-color: white;
  margin: 0;
  margin-right: 12px;
`;

const css = {
  List,
  Item,
};

export default css;

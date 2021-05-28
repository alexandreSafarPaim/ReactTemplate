import P from 'prop-types';
import { Container } from './style';

const Menu = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

Menu.propTypes = {
  children: P.node.isRequired,
};

export default Menu;

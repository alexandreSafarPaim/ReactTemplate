import P from 'prop-types';
import { Container } from './style';

const <FTName> = ({ children }) => {
  return (
  <>
    <Container>{children}</Container>
  </>
  );
};

<FTName>.propTypes = {
  children: P.node.isRequired,
};

export default <FTName>;

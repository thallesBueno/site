import styled from 'styled-components';

const ChildrenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.mainColorContrast};
`;

export default ChildrenWrapper;

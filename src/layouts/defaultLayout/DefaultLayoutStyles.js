import styled from 'styled-components';

const ChildrenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.mainColor};
`;

export default ChildrenWrapper;

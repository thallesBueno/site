import styled from 'styled-components';

const ChildrenWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.mainColor};
`;

export default ChildrenWrapper;

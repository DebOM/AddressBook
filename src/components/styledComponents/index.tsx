import styled from 'styled-components';

interface Props {
  maxHeight?: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  min-height: 180px;
  max-height: ${(props: Props) => props.maxHeight || ''};
`;

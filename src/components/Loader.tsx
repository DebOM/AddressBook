import React from 'react';
import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
  message: string;
}

const Massage = styled('span')`
  margin-left: 1rem;
`;
const Loading = styled('div')`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const Loader: React.FC<Props> = ({message}) => (
  <Loading>
    <CircularProgress />
    <Massage>{`${message}...`}</Massage>
  </Loading>
);

export default Loader;

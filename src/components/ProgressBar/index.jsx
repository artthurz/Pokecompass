import React from 'react';

import { Container, Progress } from './styles';

const ProgressBar = ({progress}) => {
  return (
    <Container>
      <Progress progress={progress}/>
    </Container>
  );
};

export default ProgressBar;

import * as React from 'react';
import { Container } from './container';

export default {
  title: 'Components/Layout/Container'
};

export const basic = () => (
  <Container className="bg-danger-10 h-96 ">
    Resize the window to see the changes in the container width.
  </Container>
);

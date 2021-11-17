import React from 'react';
import { Text } from '@chakra-ui/react';
import { PageProps } from 'gatsby';

const NotFound: React.FC<PageProps> = () => (
  <Layout>
    <Text>Sorry, page not found!</Text>
  </Layout>
);

export default NotFound;

'user client';

import { Container, Header } from '@mantine/core';

const HeaderComp = () => {
  return (
    <Header height={60}>
      <Container size={1280} sx={{ height: '100%' }}>
        <p>Hello pee</p>
      </Container>
    </Header>
  );
};

export default HeaderComp;

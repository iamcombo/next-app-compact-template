'user client';

import {
  Button,
  Container,
  Flex,
  Group,
  Header,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandNextjs,
} from '@tabler/icons-react';

const HeaderComp = () => {
  return (
    <Header height={60}>
      <Container size={1280} h="100%">
        <Flex align="center" justify="space-between" h="100%">
          <Group spacing={8} align="center">
            <ThemeIcon size={40} variant="light" radius={8}>
              <IconBrandNextjs size={32} stroke={1.2} />
            </ThemeIcon>
            <Title order={4}>Next App Template</Title>
          </Group>
          <Button compact variant="subtle">
            <a
              target="_blank"
              href="https://github.com/iamcombo/next-app-compact-template"
            >
              <Group spacing={8} align="center">
                <IconBrandGithub size={20} />
                <Text>Github</Text>
                <IconArrowUpRight size={14} />
              </Group>
            </a>
          </Button>
        </Flex>
      </Container>
    </Header>
  );
};

export default HeaderComp;

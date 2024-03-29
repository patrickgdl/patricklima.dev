import { styled } from '@/stitches.config';
import { Link } from '@common/components/Text';
import { PATHS } from '@common/utils/constants/paths.constants';
import NextLink from 'next/link';
import { Flex } from '../Flex';
import Signature from '../Signature';
import { ThemeToggle } from '../ThemeToggle';

const NavigationWrapper = styled('nav', {
  py: '$s',
  position: 'sticky',
  top: 0,
  width: '$full',
  backdropFilter: 'blur(2px)',
  backgroundColor: '$uiBgLoContrast',
  zIndex: '$max',
});

export const Navigation = (): JSX.Element => {
  return (
    <NavigationWrapper>
      <Flex
        direction='row'
        justify='between'
        align='center'
        css={{
          maxWidth: '$navMaxWidth',
          mx: 'auto',
          px: '$m',
          '@bp1': { px: 0 },
        }}
      >
        <NextLink passHref href={PATHS.home}>
          <Link
            aria-label='logo link'
            css={{ d: 'inline-block', userSelect: 'none' }}
            underline='false'
          >
            <Signature animationDuration={2} />
          </Link>
        </NextLink>

        <ThemeToggle />
      </Flex>
    </NavigationWrapper>
  );
};

import React from 'react'
import { styled } from '@css/theme.config'

import * as Icons from 'react-feather'

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: '$main',
  margin: '150px 0 50px 0',
  '@iPhonePlus': {
    flexDirection: 'column',
  },
})

const FooterWrapper = styled('div', {
  display: 'flex',
  variants: {
    container: {
      true: {
        marginTop: 20,
      },
    },
  },
})

const FooterText = styled('p', {
  fontSize: '$3',
  margin: '0 10px',
  '@iPhoneSE': {
    fontSize: '$2',
  },
})

const FooterLink = styled('a', {
  color: '$main',
  textDecoration: 'none',
  '&:hover': {
    color: '$white',
  },
  variants: {
    text: {
      true: {
        margin: 0,
      },
    },
  },
  margin: '0 7px',
})

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <FooterWrapper container>
        <FooterLink
          href="https://github.com/solomonshalom/Maki"
          target="_blank"
          text
        >
          <Icons.Code />
        </FooterLink>
        <FooterText>with</FooterText>
        <Icons.Heart />
        <FooterText>
          and{' '}
          <FooterLink href="https://nextjs.org" target="_blank" text>
            Next.js
          </FooterLink>
        </FooterText>
      </FooterWrapper>
      <FooterWrapper container>
        <FooterText>
          © 2022{' '}
          <FooterLink href="https://solomonlijo.vercel.app/" target="_blank" text>
            solomon Shalom Lijo
          </FooterLink>
        </FooterText>
        <FooterWrapper>
          <FooterLink href="https://github.com/solomonshalom" target="_blank">
            <Icons.GitHub />
          </FooterLink>
          <FooterLink href="https://twitter.com/shalomlijo/" target="_blank">
            <Icons.Twitter />
          </FooterLink>
        </FooterWrapper>
      </FooterWrapper>
    </Wrapper>
  )
}

export default Footer
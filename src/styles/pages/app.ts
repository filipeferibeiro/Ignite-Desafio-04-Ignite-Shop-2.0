import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  width: '3rem',
  height: '3rem',
  background: '$gray800',
  border: 0,
  borderRadius: 6,
  position: 'relative',

  cursor: 'pointer',

  transition: 'opacity 0.2s',

  '&:hover': {
    opacity: 0.8
  },

  variants: {
    hasItems: {
      true: {
        svg: {
          color: '$gray300'
        },
        span: {
          display: 'flex'
        }
      }
    },
    onCard: {
      true: {
        background: '$green500',

        svg: {
          color: '$white'
        }
      }
    }
  },

  svg: {
    color: '$gray400'
  },

  span: {
    position: 'absolute',
    top: '-14px',
    right: '-14px',
    width: '1.5rem',
    height: '1.5rem',
    background: '$green500',
    borderRadius: 100,
    border: '3px solid $gray900',
    boxSizing: 'content-box',

    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '0.875rem',
    fontWeight: 'bold',
    
    color: '$white'
  }
})

export const BigButton = styled('button', {
  marginTop: 'auto',
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',
  transition: 'background-color 0.2s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300'
  }
})

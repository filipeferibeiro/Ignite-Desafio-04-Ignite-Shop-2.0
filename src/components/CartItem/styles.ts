import { styled } from "@/styles";

export const CartItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem'
})

export const CartItemImageContainer = styled('div', {
  width: '100%',
  maxWidth: 101,
  height: 101,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const CartItemDescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  'p, strong': {
    fontSize: '$md'
  },

  button: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: '$green500',
    border: 0,
    background: 'transparent',

    transition: 'color 0.2s',

    cursor: 'pointer',
    
    '&:hover': {
      color: '$green300',
    }
  }
  
})
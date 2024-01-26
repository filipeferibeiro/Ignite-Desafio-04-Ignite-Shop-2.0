import { styled } from "@stitches/react";
import * as Dialog from '@radix-ui/react-dialog';

export const CartDialogTrigger = styled(Dialog.Trigger, {
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

export const CartDialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: '$blackA80',
  backdropFilter: 'blur(8px)'
})

export const CartDialogContent = styled(Dialog.Content, {
  background: '$gray800',
  position: 'absolute',
  top: 0,
  right: 0,
  minWidth: 480,
  height: '100%',
  padding: '3rem',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
  
  display: 'flex',
  flexDirection: 'column',
})

export const CartDialogClose = styled(Dialog.Close, {
  alignSelf: 'flex-end',
  border: 0,
  background: 'transparent',
  color: '$gray400',

  transition: 'opacity 0.2s',
  
  '&:hover': {
    opacity: 0.8
  }
})

export const CartDialogTitle = styled(Dialog.Title, {
  fontSize: '$lg',
  fontWeight: 'bold',
  marginTop: '1.5rem'
})

export const CartDialogContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'auto'
})

export const CartDialogDescription = styled(Dialog.Description, {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

export const CartItemsList = styled('div', {
  overflowY: 'auto',
  flexGrow: 1,
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
})

export const CartResume = styled('div', {
  flex: 'none',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3.5rem',
  gap: '0.5rem',

  section: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.5rem',

    'span + span': {
      fontSize: '$md'
    },
    
    strong: {
      fontSize: '$md'
    },

    'strong + strong': {
      fontSize: '$xl',
      marginBottom: '3.5rem',
    },
  }
})
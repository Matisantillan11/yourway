import { Box, Button, Container } from '@chakra-ui/react'

export const Hamburguer = (onClick: any) => {
  return (
    <Container
      width="2.5%"
      height="100%"
      display="flex"
      margin={0}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
    >
      <Box
        width={8}
        height={'3px'}
        margin={1}
        backgroundColor="#7c7979"
        borderRadius="12px"
      />
      <Box
        width={8}
        height="3px"
        margin={1}
        backgroundColor="#7c7979"
        borderRadius="12px"
      />
      <Box
        width={8}
        height={'3px'}
        margin={1}
        backgroundColor="#7c7979"
        borderRadius="12px"
      />
    </Container>
  )
}

import { Container, Image } from "@chakra-ui/react"

export interface ImageCartProps {
  redirectToDetails: () => void
  pic: string
}

export default function ImageCart  ({ redirectToDetails, pic}: ImageCartProps)  {
  return (
    <Container width={340} height={240} margin={0} onClick={redirectToDetails}>
      <Image margin={0} width={340} height={240} src={pic} loading="lazy" />
    </Container>
  )
}
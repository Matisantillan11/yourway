import {
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  FormControl,
} from '@chakra-ui/react'
import logo from '../../assets/images/logo.png'

export const LoginModalComponent = ({ open, onClose }: any) => {
  return (
    <>
      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign="center"
            marginTop={30}
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignContent="center"
          >
            <Image src={logo} width={75} marginX="auto" height={75} />
            <Text fontWeight={500}>Yourway - Inicio de sesión</Text>
          </ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody
            marginY={5}
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignContent="center"
          >
            <FormControl>
              <Text fontWeight={300} fontSize={12}>
                Correo electrónico
              </Text>
              <Input marginBottom={5} placeholder="example@example.com" />
            </FormControl>

            <FormControl>
              <Text fontWeight={300} fontSize={12}>
                Contraseña
              </Text>
              <Input marginBottom={5} placeholder="********" />
            </FormControl>

            <Text fontSize={14}>Olvidaste tu contraseña?</Text>

            <Button width="50%" marginX="25%" marginY={10} mr={3}>
              Iniciar Sesión
            </Button>
          </ModalBody>

          <ModalFooter
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignContent="center"
          >
            <Text>
              Todavía no tenés cuenta? <strong>Registrate</strong>
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

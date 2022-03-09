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
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IoCloudDone, IoEye, IoEyeOff } from 'react-icons/io5'
import logo from '../../assets/images/logo.png'

//interfaces
import { LoginReducer } from '../../interfaces/reducers.interfaces'
import { useValidateForm } from '../../hooks/useValidateForm'

export interface LoginModalProps {
  login: (email: string, password: string) => void
  formTested: boolean
  email: string
  setEmail: any
  password: string
  setPassword: any
  loginReducer: LoginReducer
  isOpen: boolean
  onClose: any
  clearAllFields: () => void
}

export const LoginModalComponent = ({
  isOpen,
  onClose,
  login,
  formTested,
  email,
  setEmail,
  password,
  setPassword,
  loginReducer,
  clearAllFields,
}: LoginModalProps) => {
  const { validateField } = useValidateForm()
  const [passwordShown, setPasswordShow] = useState(false)

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
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
            <FormControl
              marginBottom={5}
              isInvalid={
                formTested
                  ? validateField('email', email)
                    ? false
                    : true
                  : false
              }
            >
              <Text fontWeight={300} fontSize={12}>
                Correo electrónico
              </Text>
              <Input
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!validateField('email', email) && (
                <FormErrorMessage>
                  {email === ''
                    ? 'El email es un campo obligatorio.'
                    : 'Debes ingresar un correo electrónico válido. example@example.com'}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              marginBottom={5}
              isInvalid={
                formTested
                  ? validateField('password', password)
                    ? false
                    : true
                  : false
              }
            >
              <Text fontWeight={300} fontSize={12}>
                Contraseña
              </Text>
              <InputGroup>
                <InputRightElement
                  onClick={() => setPasswordShow(!passwordShown)}
                  pointerEvents="all"
                  children={
                    passwordShown ? (
                      <IoEye color="gray.300" />
                    ) : (
                      <IoEyeOff color="gray.300" />
                    )
                  }
                />
                <Input
                  type={passwordShown ? 'text' : 'password'}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              {!validateField('password', password) && (
                <FormErrorMessage>
                  {password === ''
                    ? 'La contraseña es un campo obligatorio.'
                    : 'La contraseña debe tener entre 8 y 12 carácteres. También debes incluir al menos una mayúscula, un número y un caracter especial. Ejemplo: C0ntras3ña-1'}
                </FormErrorMessage>
              )}
            </FormControl>

            <Text fontSize={14}>Olvidaste tu contraseña?</Text>

            {loginReducer.fetched && loginReducer.error && (
              <Alert status="error">
                <AlertIcon />
                <AlertDescription fontSize={14}>
                  {loginReducer.message}
                </AlertDescription>
              </Alert>
            )}

            {loginReducer.fetched && !loginReducer.error && (
              <Alert status="success">
                <AlertIcon />
                <AlertDescription fontSize={14}>
                  {loginReducer.message}
                </AlertDescription>
              </Alert>
            )}

            <Button
              width="50%"
              marginX="25%"
              marginY={10}
              mr={3}
              onClick={
                !loginReducer.error && loginReducer.fetched
                  ? () => clearAllFields()
                  : () => login(email, password)
              }
            >
              {loginReducer.fetching ? (
                <Spinner size="md" />
              ) : !loginReducer.error && loginReducer.fetched ? (
                'Continuar'
              ) : (
                'Iniciar Sesión'
              )}
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

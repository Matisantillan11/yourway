import swal from 'sweetalert2';

const Responses = () => {
  const success = (title, body, buttonOK = 'Ok', buttonError = 'Cancelar') => {
    swal.fire({
      icon: 'success',
      title: title,
      text: body,
      confirmButtonText: buttonOK,
      denyButtonText: buttonError,
    });
  };

  const error = (title, body, buttonOK = 'Ok', buttonError = 'Cancelar') => {
    swal.fire({
      icon: 'error',
      title: title,
      text: body,
      confirmButtonText: buttonOK,
      denyButtonText: buttonError,
    });
  };

  return { success, error };
};

export default Responses;

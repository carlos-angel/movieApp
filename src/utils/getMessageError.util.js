export const getMessageError = error => {
  return (
    error?.response?.data?.status_message ??
    'Ops, algo salio mal. inténtelo más tarde'
  );
};

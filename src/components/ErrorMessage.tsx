interface IProps {
  message?: string;
}

const ErrorMessage = ({ message }: IProps) => {
  return message ? <span className="text-red-500 text-sm mt-1 block">{message}</span> : null;
};

export default ErrorMessage;

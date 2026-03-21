import { TextField, TextFieldProps } from '@mui/material';

type RegisterFieldProps = TextFieldProps & {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
};

export const RegisterField = ({
  name,
  label,
  value,
  onChange,
  disabled,
  ...props
}: RegisterFieldProps) => (
  <TextField
    className="register-page__field"
    fullWidth
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    variant="outlined"
    disabled={disabled}
    {...props}
  />
);

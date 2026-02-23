import MIUButton from '@mui/material/Button';

interface ButtonProps {
  content: React.ReactNode;
  onClick?: () => void;
}

const buttonColors = {
  bgPrimary: '--btn-primary-bg',
  bgHover: '--btn-primary-bg-hover',
  bgActive: '--btn-primary-bg-active',
  textPrimary: '--btn-primary-text',
} as const;

export default function Button(props: ButtonProps) {
  const { content, onClick } = props;

  return (
    <MIUButton
      variant="contained"
      sx={{
        backgroundColor: `var(${buttonColors.bgPrimary})`,
        color: `var(${buttonColors.textPrimary})`,
        '&:hover': {
          backgroundColor: `var(${buttonColors.bgHover})`,
        },
        '&:active': {
          backgroundColor: `var(${buttonColors.bgActive})`,
        },
        '&:focus': {
          outline: 'none',
        },
      }}
      onClick={onClick}
    >
      {content}
    </MIUButton>
  );
}

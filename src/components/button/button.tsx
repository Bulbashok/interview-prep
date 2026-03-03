import MIUButton from '@mui/material/Button';

interface ButtonProps {
  content?: React.ReactNode;
  onClick?: () => void;
  width?: string;
  height?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
}

const buttonColors = {
  bgPrimary: '--btn-primary-bg',
  bgHover: '--btn-primary-bg-hover',
  bgActive: '--btn-primary-bg-active',
  textPrimary: '--btn-primary-text',
} as const;

export default function Button(props: ButtonProps) {
  const { content, onClick, width, height, backgroundColor, backgroundColorHover } = props;

  return (
    <MIUButton
      variant="contained"
      sx={{
        width: width,
        height: height,
        backgroundColor: backgroundColor || `var(${buttonColors.bgPrimary})`,
        color: `var(${buttonColors.textPrimary})`,
        '&:hover': {
          backgroundColor: backgroundColorHover || `var(${buttonColors.bgHover})`,
        },
        '&:active': {
          backgroundColor: backgroundColorHover || `var(${buttonColors.bgActive})`,
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

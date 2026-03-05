import './changeLanguage.scss';

import { useState } from 'react';

import { ClickAwayListener } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '../../button/button';

export default function ChangeLanguage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = () => {
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className="language-manager">
        <Button content={<LanguageIcon />} height="40px" onClick={toggleDropdown} />

        {isOpen && (
          <div className="language-manager__dropdown">
            <Button height="2em" content="RU" onClick={() => handleLanguageChange()} />
            <Button height="2em" content="EN" onClick={() => handleLanguageChange()} />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

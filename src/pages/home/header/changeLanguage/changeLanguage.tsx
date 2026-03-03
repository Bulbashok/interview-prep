import './changeLanguage.scss';

import { useState } from 'react';

import LanguageIcon from '@mui/icons-material/Language';
import Button from '../../../../components/button/button';

export default function ChangeLanguage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: string) => {
    console.log(`Selected language: ${lang}`);
    setIsOpen(false);
  };

  return (
    <div className="language-manager">
      <Button content={<LanguageIcon />} height="40px" onClick={toggleDropdown} />

      {isOpen && (
        <div className="language-manager__dropdown">
          <Button height="2em" content="RU" onClick={() => handleLanguageChange('RU')} />
          <Button height="2em" content="EN" onClick={() => handleLanguageChange('EN')} />
        </div>
      )}
    </div>
  );
}

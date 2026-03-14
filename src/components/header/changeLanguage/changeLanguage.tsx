import './changeLanguage.scss';

import { ClickAwayListener } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '../../button/button';
import { useLanguageSwitcher } from './useLanguageSwitcher';

export default function ChangeLanguage() {
  const { isOpen, toggleDropdown, closeDropdown, changeLanguage, languages } =
    useLanguageSwitcher();

  return (
    <ClickAwayListener onClickAway={closeDropdown}>
      <div className="language-manager">
        <Button content={<LanguageIcon />} height="40px" onClick={toggleDropdown} />

        {isOpen && (
          <div className="language-manager__dropdown">
            <Button height="2em" content="RU" onClick={() => changeLanguage(languages.RU)} />
            <Button height="2em" content="EN" onClick={() => changeLanguage(languages.EN)} />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
}

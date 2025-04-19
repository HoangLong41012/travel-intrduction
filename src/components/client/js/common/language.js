import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Menu, Button, MenuItem } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VnIcon from '../../../../icons/language/vn';
import EnIcon from '../../../../icons/language/en';
import { languageList } from '../../../../utils/constant';
import { getPreferredLanguage } from '../../../../services/localStorage';
import { selectLanguageFunction } from '../../../../state/dispatchers/common/language.dispatcher';

const ClientLanguage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageIcon, setLanguageIcon] = useState(null);
  const [changeLanguage, setChangeLanguage] = useState(false);
  const router = useRouter();
  const open = Boolean(anchorEl);

  useEffect(() => {
    switch (getPreferredLanguage()) {
      case 'en':
        setLanguageIcon(<EnIcon />);
        break;
      case 'vi':
        setLanguageIcon(<VnIcon />);
        break;
      default:
        setLanguageIcon(<EnIcon />);
    }
  }, [changeLanguage]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (locale) => {
    selectLanguageFunction({ router, locale });
    setChangeLanguage(!changeLanguage);
  };

  return (
    <Box className="language-dd">
      <Box>
        <Button
          height={16}
          sx={{
            padding: '0px 0px',
            minWidth: 'initial',
            verticalAlign: 'middle',
          }}
          id="language-button"
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleOpen}
          endIcon={
            <KeyboardArrowDownIcon
              sx={{
                color: '#FFFFFF',
                margin: '0px',
              }}
            />
          }
        >
          {languageIcon}
        </Button>
        <Menu
          id="language-menu"
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'language-button',
          }}
          anchorEl={anchorEl}
          className="language-menu"
        >
          <MenuItem
            onClick={() => {
              handleChangeLanguage(languageList[0].locale);
              handleClose();
            }}
          >
            <EnIcon /> {languageList[0].name}
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleChangeLanguage(languageList[1].locale);
              handleClose();
            }}
          >
            <VnIcon /> {languageList[1].name}
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default ClientLanguage;

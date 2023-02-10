import { useMemo } from 'react';
import { useThemeContext } from '../hooks/themeHook';
import { BsSun } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';
import { Button } from 'react-bootstrap';

const BtnToggleTheme = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  const ToggleThemeIcon = useMemo(
    () => (dark ? FiMoon : BsSun),
    [dark],
  );

  return (
    <Button className={className + " btn-toggle"} onClick={toggleTheme}>
      <ToggleThemeIcon style={{ marginTop: "10px", fontSize: "25px" }}/>
    </Button>
  );
};

export default BtnToggleTheme;
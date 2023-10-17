import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { MobileButton, NavContainer } from './style';
import { ReactComponent as MyPhotosIcon } from '../../../assets/feed.svg';
import { ReactComponent as StatisticsIcon } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhotoIcon } from '../../../assets/adicionar.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/sair.svg';

import useMedia from '../../../hooks/useMedia';

import { useAppDispatch } from '../../../store';
import { userLogout } from '../../../store/reducers/user';

const UserNavHeader = () => {
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const dispatch = useAppDispatch()

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const handleLogout = () => {
    dispatch(userLogout())
    navigate('/login');
  };

  return (
    <>
      {mobile && (
        <MobileButton
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={mobileMenu ? 'mobileButtonActive' : ''}
        ></MobileButton>
      )}

      <NavContainer
        className={`${mobile ? 'navMobile' : ''} ${
          mobileMenu ? 'navMobileActive' : ''
        }`}
      >
        <NavLink
          to="/account"
          end
        >
          <MyPhotosIcon />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/account/statistics">
          <StatisticsIcon />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/account/post">
          <AddPhotoIcon />
          {mobile && 'Adicionar Fotos'}
        </NavLink>
        <button onClick={handleLogout}>
          <LogoutIcon />
          {mobile && 'Sair'}
        </button>
      </NavContainer>
    </>
  );
};

export default UserNavHeader;

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import UserNavHeader from '../UserNavHeder/UserNavHeader';
import { UserHeaderContainer } from './style';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case '/account/post':
        setTitle('Poste Sua Foto');
        break;
      case '/account/statistics':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
        break;
    }
  }, [location]);

  return (
    <UserHeaderContainer>
      <h1 className="title">{title}</h1>
      <UserNavHeader />
    </UserHeaderContainer>
  );
};

export default UserHeader;

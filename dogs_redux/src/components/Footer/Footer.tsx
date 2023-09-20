import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg';
import { FooterContainer } from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;

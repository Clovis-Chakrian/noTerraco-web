import styles from './footer.module.css';
import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoFacebook
} from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://api.whatsapp.com/send?phone=5581998469403&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido" aria-label='Link para enviar mensagem para o Whatsapp do restaurante' target="_blank" rel="noopener noreferrer">
        <IoLogoWhatsapp color='#006b57' size={28} />
      </a>

      <a href="https://www.instagram.com/noterracorestaurante/" aria-label='Link para acessar Instagram do restaurante.' target="_blank" rel="noopener noreferrer">
        <IoLogoInstagram color='#006b57' size={28} />
      </a>

      <a href="https://www.facebook.com/noterracorestaurante/" aria-label='Link para acessar Facebook do restaurante' target="_blank" rel="noopener noreferrer">
        <IoLogoFacebook color='#006b57' size={28} />
      </a>
    </footer>
  );
};

export default Footer;
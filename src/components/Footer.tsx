import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
  return(
    <footer>
        <a target="_blank" href={'https://www.instagram.com/noterracorestaurante/'} rel="noreferrer">
          <IoLogoInstagram style={{ fill: '#00A284' }} size={36} />
        </a>
        <a className='wpp-logo' target="_blank" href={'https://api.whatsapp.com/send?phone=5581998469403&text=Olá, gostaria de fazer um pedido'} rel="noreferrer">
          <IoLogoWhatsapp style={{ fill: '#00A284' }} size={36} />
        </a>
        <a target="_blank" href={'https://www.facebook.com/noterracorestaurante/'} rel="noreferrer">
          <IoLogoFacebook style={{ fill: '#00A284' }} size={36} />
        </a>
      </footer>
  );
}

export default Footer;
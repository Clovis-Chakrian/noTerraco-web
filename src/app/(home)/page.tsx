import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'
import {
  IoArrowDownOutline,
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoFacebook,
  IoCallOutline
} from 'react-icons/io5';
import Image from 'next/image';
import {
  IoIosRestaurant
} from 'react-icons/io';
import {
  FaMapSigns
} from 'react-icons/fa'

import styles from './page.module.css';
import {
  Header,
  Footer
} from '@/components';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Header />
      </header>

      <section className={styles.basicInfo}>
        <div className={styles.content}>
          <h2>Seja bem vindo(a) ao No Terraço</h2>
          <h3>Gastronomia brasileira com amor e carinho pela chefe <a href="https://www.instagram.com/carlachakrian/" target='_blank'>Carla Chakrian</a> e equipe.</h3>
          <Link className={styles.menuLink} href={'/menu'}>
            Conferir cardápio
            <IoIosRestaurant size={32} color='#FFF' />
          </Link>

          <a href="#localization" className={styles.findUsLink}>
            Nos encontre
            <FaMapSigns size={32} color='#FFF' />
          </a>
        </div>

        <div className={styles.semicircle}>
          <a aria-label='Descer para seção de Nos Encontre.' href="#localization" className={styles.arrowDown}>
            <IoArrowDownOutline size={32} color='#FFF' />
          </a>
        </div>
      </section>

      <section id='localization' className={styles.localization}>
        <iframe

          title='Mapa com localização do restaurante No Terraço.'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5032612231307!2d-34.91285172399823!3d-8.05003568041252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab193ed6df1ed7%3A0xdd628111d0121e38!2sNo%20Terra%C3%A7o!5e0!3m2!1spt-BR!2sbr!4v1691178802825!5m2!1spt-BR!2sbr"
          loading="lazy"
          className={styles.map}
        >
        </iframe>

        <div className={styles.openingHours}>
          <div className={styles.lunch}>
            <div className={styles.lunchContent}>
              <Image
                className={styles.lunchImg}
                src={'https://ik.imagekit.io/noterraco/landingPage/lunch_bg_G4sobYtnK.webp?updatedAt=1693249563669'}
                alt='Entrada do restaurante No Terraço'
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              <h4>Almoço</h4>
              <p>De terça a domingo | 11:45h - 15:45h</p>
            </div>
          </div>

          <div className={styles.dinner}>
            <div className={styles.dinnerContent}>
              <Image
                className={styles.dinnerImg}
                src={'https://ik.imagekit.io/noterraco/landingPage/dinner_bg_CRhjBK7XOE.webp?updatedAt=1693249559925'}
                alt='Entrada do restaurante No Terraço'
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  height: '100%',
                  width: '100%'
                }}
              />
              <h4>Jantar</h4>
              <p>Sexta e sábado| 18:45h - 22:30h</p>
            </div>
          </div>
        </div>

        <div className={styles.contact}>
          <a aria-label='Ligar para o restaurante No Terraço.' href="tel:+558131255568">
            <IoCallOutline size={28} color='#FFF' />
          </a>

          <a aria-label='Enviar mensagem via whatsapp para o restaurante No Terraço' href="https://api.whatsapp.com/send?phone=5581998469403&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp size={28} color='#FFF' />
          </a>

          <a aria-label='Acessar página do instagram do restaurante No Terraço' href="https://www.instagram.com/noterracorestaurante/" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram size={28} color='#FFF' />
          </a>

          <a aria-label='Acessar página do Facebook do restaurante No Terraço' href="https://www.facebook.com/noterracorestaurante/" target="_blank" rel="noopener noreferrer">
            <IoLogoFacebook size={28} color='#FFF' />
          </a>
        </div>
      </section>

      <article id='aboutUs' className={styles.aboutUs}>
        <section className={styles.aboutUsP1}>
          <div>
            <Image
              className={styles.aboutUsImg}
              src={'https://ik.imagekit.io/noterraco/landingPage/aboutP1_Lj3HKHprp.webp?updatedAt=1693249563786'}
              alt='Entrada do restaurante No Terraço'
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <p>
              O restaurante No Terraço nasceu em novembro de 2018 e tinha outro nome, Terraço do Maricota. Mas em agosto de 2020 mudamos de endereço e também de nome, mas com a mesma qualidade e carinho de sempre para com nossos clientes! E para conhecer melhor a história do terraço, temos que resgatar a história de Carla Chakrian!
            </p>
          </div>
        </section>

        <section className={styles.aboutUsP2}>
          <div>
            <Image
              className={styles.aboutUsImg}
              src={'https://ik.imagekit.io/noterraco/landingPage/aboutP2_PhQu-GcvR.webp?updatedAt=1693249563617'}
              alt='Entrada do restaurante No Terraço'
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <p>
              Carlinha em 2001 trabalhava em uma vídeo locadora, e mesmo sabendo do futuro &quot;promissor&quot; do negócio de DVD&apos;s, resolveu seguir o sonho de trabalhar com o que mais gostava: dormir...ops...cozinhar.
            </p>

            <p>
              O SENAC iniciou o que posteriormente foi aprimorado pelas
              várias experiências e ensinamentos da carreira. Começando em um modesto self-service, passou pela cozinha regional e experimentou a gastronomia francesa nos primeiros anos. Preparou depois muitos cafés da manhã em hotéis e resorts, lembrando com &quot;saudade&quot; de acordar às 4 da manhã!
            </p>
          </div>
        </section>

        <section className={styles.aboutUsP3}>
          <div>
            <Image
              className={styles.aboutUsImg}
              src={'https://ik.imagekit.io/noterraco/landingPage/aboutP3_aqoFbFaOt.webp?updatedAt=1693249563662'}
              alt='Entrada do restaurante No Terraço'
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <p>
              Ajudou a liderar a cozinha de um bar no aeroporto e de
              restaurante chique em Boa Viagem. Foi também chef por 7 anos do Ça Va Bistrô, onde se tornou conhecida no cenário gastronômico local.
            </p>

            <p>
              Mas faltava algo, faltava aquele cantinho pra chamar de seu. Um lugar que exalasse carinho e amor em cada detalhe, que pudesse entregar aos nossos clientes a experiência da culinária dela.
            </p>
          </div>
        </section>

        <section className={styles.aboutUsP4}>
          <div>
            <Image
              className={styles.aboutUsImg}
              src={'https://ik.imagekit.io/noterraco/landingPage/aboutP4_gNRJAYHNm.webp?updatedAt=1693249563683'}
              alt='Entrada do restaurante No Terraço'
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <p>
              Há quem ame...e também quem ame mais a comida de Carlinha, e tudo vai ficar ainda mais gostoso com você nessa nova etapa, venha curtir conosco no terraço!
            </p>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}

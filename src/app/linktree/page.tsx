import styles from './page.module.css';
import Link from "next/link";
import Image from 'next/image';
import { IoLogoWhatsapp, IoRestaurantOutline } from 'react-icons/io5'
import { FaDog } from 'react-icons/fa'


export default function Linktree() {
  return (
    <main className={styles.linktreeContainer}>
      <Image
        className={styles.bgImg}
        src={'https://ik.imagekit.io/noterraco/linktree/linktree_bg-min_NI_-1LBnKI.webp?updatedAt=1693494523663'}
        alt='Entrada do restaurante No Terraço'
        fill
        priority
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      <header className={styles.linktreeHeader}>
        <Image priority src={'/logo.png'} alt="Logo do restaurante No Terraço" width={222} height={125} />
      </header>

      <section className={styles.buttonsSection}>
        <a href={'https://wa.me/5581985444683'} target='_blank' rel='noreferrer' className={styles.linktreeButton}>
          <IoLogoWhatsapp color='#00A284' size={24} />
          <p className='productTitle'>Whatsapp</p>
        </a>

        <Link href={'/menu'} className={styles.linktreeButton}>
          <IoRestaurantOutline color='#00A284' size={24} />
          <p className='productTitle'>Cardápio</p>
        </Link>

        <Link href={'/pet'} className={styles.linktreeButton}>
          <FaDog color='#00A284' size={24} />
          <p className='productTitle'>Menu pet</p>
        </Link>
      </section>
    </main>
  );
}
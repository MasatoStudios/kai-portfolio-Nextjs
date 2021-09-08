import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const navbar = ({ destination }) => {
	return (
		<nav>
			<div className={styles.navContainer}>
				<div className={styles.flex}>
					{/* Logo */}
					<div className={styles.logoContainer}>
						<Image
							className={styles.logo}
							layout={'fill'}
							objectFit={'contain'}
							src='/logo_black.png'
							alt='Kai Webb Logo'
						/>
					</div>
					{/* Home, About and Contact */}
					<div className={styles.listStyles}>
						<ul className={styles.listFlex}>
							<Link href='./Work'>
								<a className={styles.listItem}>Work</a>
							</Link>
							<Link href='./About'>
								<a className={styles.listItem}>About</a>
							</Link>
							<Link href='./Contact'>
								<a className={styles.listItem}>Contact</a>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default navbar

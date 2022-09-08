import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../public/Team3.png"
import styles from './Footer.module.css'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
	return (
		<footer id={styles.footer}>
			<div className={styles.footer_top}>
				<div className="container">
					<div className="row">
						<div className={`col-lg-4 col-md-6 ${styles.footer_info}`}>
							<div style={{marginLeft: "-30px"}} >
								<Image src={Logo} alt="Trackling" width="200px" height="73px" />
							</div>
							<p>
								We are the websibe-platform which provides some mini-games that focused to increase your happiness!
							</p>
						</div>

						<div className={`col-lg-4 col-md-6 ${styles.footer_links}`}>
							<h4>About Us</h4>
							<ul>
								<li>
									<i className="bi bi-chevron-right"></i> <Link href="/">Our Team</Link>
								</li>
								<li>
									<i className="bi bi-chevron-right"></i> <Link href="/underconstruction">FAQ</Link>
								</li>
								<li>
									<i className="bi bi-chevron-right"></i> <Link href="/underconstruction">Why us</Link>
								</li>
							</ul>
						</div>

						<div className={`col-lg-4 col-md-6 ${styles.footer_contact}`}>
							<h4>Contact Us</h4>
							<p>
								Jakarta Pusat, Indonesia <br />
								<strong>Phone:</strong> +62 0888-888-888
								<br />
								<strong>Email:</strong> Kelompok3@binarian.com
								<br />
							</p>

							<div className={styles.social_links}>
								<a href="#twitter">
									<BsTwitter size={15} />
								</a>
								<a href="#facebook">
									<BsFacebook size={15} />
								</a>
								<a href="#instagram">
									<BsInstagram size={15} />
								</a>
								<a href="#linkedin">
									<BsLinkedin size={15} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className={styles.copyright}>
					&copy; Copyright <strong>Kelompok 3</strong>. All Rights Reserved
				</div>
				<div className={styles.credits}>
					Designed by <a href="index.html">Kelompok 3</a>
				</div>
				<div className={styles.credits}>
					Logo Designed by{" "}
					<a href="https://www.facebook.com/anhedoniambedo" target="_blank" rel="noreferrer">
						Naufal
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

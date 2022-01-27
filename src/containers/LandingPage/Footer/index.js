import React from 'react';
import { Row, Col } from 'antd';
import FooterLogo from 'public/images/logo-footer.svg';
// import Facebook from 'public/images/facebook.svg';
import Twitter from 'public/images/twitter.svg';
import Plane from 'public/images/send-plane-dark-green.svg';
// import LinkedIn from 'public/images/linkedin.svg';
// import Youtube from 'public/images/youtube.svg';
import Instagram from 'public/images/instagram.svg';
// import GooglePlay from 'public/images/googleplay.svg';
// import AppStore from 'public/images/appstore.svg';
import classes from './style.module.less';

const Footer = () => {
	return (
		<footer className={classes.footerBlock}>
			<Row className="mt-4" justify="center">
				<Col xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 6 }} xl={{ span: 6 }} xxl={{ span: 5 }}>
					<div className={classes.companyInfo}>
						<div className={`${classes.logo}`}>
							<FooterLogo />
						</div>
						<div className={classes.social}>
							<div className={classes.socialHeading}>Follow us on:</div>
							<div className={classes.icons}>
								<a href="https://t.me/Renteez" target="_blank" rel="noopener noreferrer"><Plane /> </a>
								<a href="https://twitter.com/renteez_" target="_blank" rel="noopener noreferrer"><Twitter /> </a>
								<a href="https://instagram.com/renteez_?utm_medium=copy_link" target="_blank" rel="noopener noreferrer"><Instagram /> </a>
								{/* <a href="#" target="_blank" rel="noopener noreferrer"><LinkedIn /> </a> */}
							</div>
						</div>
					</div>
				</Col>
				<Col xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 14 }} xl={{ span: 11 }} xxl={{ span: 8 }}>
					<p className={classes.contactInfo}>
						Renteez is revolutionizing the rental industry.<br />
						Ask us how you can get your investment in on the
						ground floor of this amazing opportunity. Contact us at <a className={classes.greenLink} href="mailto:chrisn@renteez.com">chrisn@renteez.com</a> to learn more. Or
						call <a className={classes.greenLink} href="tel:(541) 570-0554">(541) 570-0554</a>
					</p>
				</Col>
				{/* <Col md={{ span: 5 }} lg={{ span: 6 }} xl={{ span: 6 }}>
					<div className={classes.companyInfo}>
						<div className={classes.logo}>
							<FooterLogo />
						</div>
						<div className={classes.social}>
							<div className={classes.socialHeading}>Follow us on</div>
							<div className={classes.icons}>
								<Facebook />
								<Twitter />
								<LinkedIn />
								<Youtube />
							</div>
						</div>
					</div>
				</Col>
				<Col md={{ span: 4 }} lg={{ lg: 4 }} xl={{ span: 3 }} className="mr-5">
					<p className={classes.headingText}>Theme Pages</p>
					<ul>
						<li>Home Pages</li>
						<li>Pricing</li>
						<li>Contact Us</li>
						<li>Team</li>
					</ul>
				</Col>
				<Col md={{ span: 4 }} lg={{ span: 3 }} className="mr-5">
					<p className={classes.headingText}>Company Bio</p>
					<ul>
						<li>Blog</li>
						<li>Help Center</li>
						<li>Sales Tools Catalog</li>
						<li>Academy</li>
					</ul>
				</Col>
				<Col md={{ span: 4 }} lg={{ span: 3 }} xl={{ span: 3 }} className="mr-5">
					<p className={classes.headingText}>Information</p>
					<ul>
						<li>Terms and Policy</li>
						<li>About us</li>
						<li>Support</li>
						<li>About us</li>
					</ul>
				</Col>
				<Col md={{ span: 4 }} lg={{ span: 3 }} xl={{ span: 3 }}>
					<p className={classes.headingText}>Download</p>
					<ul>
						<li><GooglePlay /></li>
						<li><AppStore /></li>
					</ul>
				</Col> */}
			</Row>
		</footer>
	);
};

export default Footer;

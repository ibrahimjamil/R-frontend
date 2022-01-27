import React from 'react';
import Image from 'next/image';
import { Row, Col, Button } from 'antd';
import Home from 'public/images/tenant-home.png';
import Application from 'public/images/submit-application.png';
import RequestRepair from 'public/images/tenant-repairs.png';
import SubmitApplication from 'public/images/background-check.png';
import PayRent from 'public/images/pay-rent.png';
import PaymentMobile from 'public/images/payment-mobile.png';
import PaymentSM from 'public/images/payment-sm.png';
import DownloadApp from 'public/images/download-app-mobile.png';
import DownloadAppMobile from 'public/images/tenant-download-app-mobile.png';
import classes from './style.module.less';

const Tenant = () => {
	return (
		<div className="tenant">
			<div className={`${classes.sectionOne} my-5`}>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22, order: 2 }} sm={{ span: 23, order: 2 }} lg={{ span: 12, order: 0 }} xl={{ span: 8 }} xxl={{ span: 6 }}>
						<div className={`${classes.ptXs2} mt-sm-5 mt-lg-0`}>
							<h2>Search Listings</h2>
							<p className="mb-4">
								You’re searching for the perfect property online, whether across town or across the
								country, and Eureka, you found it! Now what, do you wait for business hours and call, or
								send an email and wait for a response? Not with Renteez, you can fill out your
								application and get your real interest in the landlord’s hands right away!
							</p>
							<Button type="primary" className="btnPrimary d-none">
								Search new listings
							</Button>
						</div>
					</Col>
					<Col xs={{ span: 22 }} sm={{ span: 18 }} lg={{ span: 10, offset: 1 }} xl={{ span: 8 }} xxl={{ span: 7, offset: 1 }}>
						<div className="">
							<Image src={Home} alt="listed homes" />
						</div>
					</Col>
				</Row>
			</div>

			<div className={`${classes.sectionTwo} my-5`}>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22 }} sm={{ span: 16 }} lg={{ span: 10 }} xl={{ span: 8 }} xxl={{ span: 6 }}>
						<div className="mb-sm-4 mb-lg-0">
							<Image src={Application} alt="submit application" />
						</div>
					</Col>
					<Col xs={{ span: 22 }} sm={{ span: 23 }} lg={{ span: 10, offset: 2 }} xl={{ span: 7, offset: 1 }} xxl={{ span: 6, offset: 1 }}>
						<div className={`${classes.ptXs2} mt-sm-5 mt-lg-0`}>
							<h2>Submit Applications</h2>
							<p className="mb-4">
								Once you’ve found the perfect fit it is time to submit your application. Do it all
								online with Renteez and as you build your history see how fast that process becomes.
							</p>
						</div>
					</Col>
				</Row>
			</div>

			<div className={`${classes.sectionThree} my-5`}>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22, order: 2 }} sm={{ span: 23, order: 2 }} lg={{ span: 12, order: 0 }} xl={{ span: 8 }} xxl={{ span: 6 }}>
						<div className={`${classes.ptXs2} mt-sm-5 mt-lg-0`}>
							<h2>Background Checks</h2>
							<p className="mb-4">
								Submit to background and criminal checks and keep them in your profile for quick and
								easy submission.As you build your renter profile your good history makes background
								checks less and less important.
							</p>
							<h3>Renteez</h3>
							<ul className="renteez">
								<li>Full Credit Reports</li>
								<li>Tenant Criminal Report</li>
								<li>Tenant Eviction Report</li>
								<li>Credit-Based Resident Score</li>
							</ul>
						</div>
					</Col>
					<Col xs={{ span: 22 }} sm={{ span: 18 }} lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 1 }} xxl={{ span: 6, offset: 1 }}>
						<div className={`${classes.sectionThreeImg}`}>
							<Image src={SubmitApplication} alt="background check" />
						</div>
					</Col>
				</Row>
			</div>

			<div className={`${classes.sectionFour} my-5`}>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22 }} sm={{ span: 15 }} lg={{ span: 10 }} xl={{ span: 8 }} xxl={{ span: 6 }}>
						<div className="mb-sm-4 mb-lg-0">
							<Image src={RequestRepair} alt="repair request" />
						</div>
					</Col>
					<Col xs={{ span: 22 }} sm={{ span: 23 }} lg={{ span: 12, offset: 1 }} xl={{ span: 7, offset: 1 }} xxl={{ span: 6, offset: 2 }}>
						<div className={`${classes.ptXs4} mt-sm-5 mt-lg-0`}>
							<h2> Request <span className={`${classes.dSmBlock}`}> Repairs </span></h2>
							<p className="mb-4">
								What do you do when something goes wrong ? You simply create a repair request in Renteez
								and rest easy knowing that your request has been heard, the right people have been
								notified and it will be taken care of.
							</p>
						</div>
					</Col>
				</Row>
			</div>

			<div className={`${classes.sectionFive} my-5 `}>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22, order: 2 }} sm={{ span: 23, order: 2 }} lg={{ span: 12, order: 0 }} xl={{ span: 8 }} xxl={{ span: 6 }}>
						<div className={`${classes.ptXs2} mt-sm-5 mt-lg-0`}>
							<h2>Pay Rent</h2>
							<p className="mb-4">
								You’re busy, we get it. Whether you are a student rushing off to classes, a professional
								navigating work and family, or a retiree doting on the grandkids, Renteez makes it easy
								for you to pay your rent. You can set reminders, or better yet, set up auto-pay and
								make sure you don’t miss a payment. Consistently pay your rent on time and see what’s
								in it for you!
							</p>
							<h3>Renteez</h3>
							<ul className="renteez">
								<li>In-app notifications</li>
								<li>Message history</li>
							</ul>
						</div>
					</Col>
					<Col xs={{ span: 22 }} sm={{ span: 18 }} lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 1 }} xxl={{ span: 6, offset: 1 }}>
						<div className={`${classes.sectionFiveImg}`}>
							<Image src={PayRent} alt="pay rent" />
						</div>
					</Col>
				</Row>
			</div>

			<div className={`${classes.sectionSix} mt-5`}>
				<div className={`${classes.headingXs}`}>
					<h2 className="">Tenants can deposit their rent to their wallet.</h2>
				</div>
				<Row justify="center" align="middle">
					<Col xs={{ span: 18 }} sm={{ span: 8 }} lg={{ span: 9 }} xl={{ span: 7 }} xxl={{ span: 6 }}>
						<div className={`${classes.sectionSixImg}`}>
							<Image src={PaymentMobile} alt="rent deposit wallet" />
						</div>
						<div className={`${classes.sectionSixImgMobile}`}>
							<Image src={PaymentSM} alt="rent deposit wallet" />
						</div>
					</Col>
					<Col xs={{ span: 22 }} sm={{ span: 12, offset: 2 }} lg={{ span: 13, offset: 1 }} xl={{ span: 9, offset: 2 }} xxl={{ span: 7, offset: 1 }}>
						<div className={`${classes.sectionSixText}`}>
							<h2 className={`${classes.xsNone}`}>Tenants can deposit their rent to their wallet.</h2>
							<p className={`${classes.lineHeightSm} font-600 clr-black`}>
								Convert it to Renteez coin and can stake it for a set amount of time and earn rewards!
							</p>
							<p className="">
								The Longer you stake the greater the rewards, and never miss a payment with our direct
								auto pay.
							</p>
						</div>
					</Col>
				</Row>
			</div>

			<div className={`${classes.sectionSeven}`}>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22 }} sm={{ span: 12 }} lg={{ span: 10 }} xl={{ span: 8 }} xxl={{ span: 6 }}>
						<h2>
							Download the app <span className="d-block">now & use it. </span>
						</h2>
					</Col>
					<Col xs={{ span: 21 }} sm={{ span: 10, offset: 1 }} lg={{ span: 10 }} xl={{ span: 8 }} xxl={{ span: 6 }}>
						<div className={classes.downloadAppImg}>
							<div className={`${classes.downloadApp}`}>
								<Image src={DownloadApp} alt="download app" />
							</div>
							<div className={`${classes.downloadAppMobile}`}>
								<Image src={DownloadAppMobile} alt="download app" />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Tenant;

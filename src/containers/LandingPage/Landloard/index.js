import React from 'react';
import Image from 'next/image';
import { Row, Col, Button } from 'antd';
import Home from 'public/images/home.png';
import Feature from 'public/images/feature.svg';
import User from 'public/images/user-icon.svg';
import PlaneYellow from 'public/images/send-plane-yellow.svg';
import PlaneBlue from 'public/images/send-plane-blue.svg';
import PlaneGreen from 'public/images/send-plane-green.svg';
import Customer from 'public/images/customer-background.png';
import Application from 'public/images/application.png';
import PaymentMobile from 'public/images/payment-mobile.png';
import PaymentSM from 'public/images/payment-sm.png';
import Repair from 'public/images/repair.png';
import Dashboard from 'public/images/get-started-dashboard.png';
import DashboardMobile from 'public/images/dashboard-mobile.png';
import classes from './style.module.less';

const Landlord = () => {
	return (
		<div className="landlord">
			<div className={`${classes.sectionOne} my-5`}>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22, order: 2 }} sm={{ span: 23, order: 2 }} lg={{ span: 10, order: 0 }} xl={{ span: 9 }} xxl={{ span: 6 }}>
						<div className={`${classes.sectionOneDes}`}>
							<h2>Post Listings</h2>
							<p className="mb-4">
								Our step by step process helps you get your properties listed online for potential
								renters as quickly as possible without missing key information that renters are looking
								for.
							</p>
							<Button type="primary" className="btnPrimary d-none">
								List your property
							</Button>
						</div>
					</Col>
					<Col xs={{ span: 22 }} sm={{ span: 18 }} lg={{ span: 10, offset: 0 }} xl={{ span: 7, offset: 1 }} xxl={{ span: 6, offset: 1 }}>
						<div className="">
							<Image src={Home} alt="listed homes" />
						</div>
					</Col>
				</Row>
			</div>

			<div className="sectionTwo my-5">
				<Row justify="center" align="middle">
					<Col xs={{ span: 22 }} sm={{ span: 18 }} lg={{ span: 12 }} xl={{ span: 11 }} xxl={{ span: 7 }}>
						<div className="">
							<Image src={Application} alt="review application" />
						</div>
					</Col>
					<Col xs={{ span: 0 }} sm={{ span: 0 }} lg={{ span: 10 }} xl={{ span: 9, offset: 1 }} xxl={{ span: 7, offset: 1 }}>
						<div className="">
							<h2>Review Applications</h2>
							<p className="mb-4">
								Landlords can view potential renters and their ratings in the network and invite them to
								submit an application.
							</p>
						</div>
					</Col>
				</Row>
			</div>

			<div className={`${classes.sectionThree} my-5`}>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22 }} sm={{ span: 23, order: 2 }} lg={{ span: 12, order: 0 }} xl={{ span: 10 }} xxl={{ span: 7 }}>
						<div className="">
							<h2>Background Checks</h2>
							<p className="mb-4">
								Finding qualified tenants who will pay on time is crucial for any landlord. Renteez
								helps landlords run background and credit checks that will reduce costly evictions.
							</p>
							<h3>Expertise area: </h3>
							<ul className="expertise">
								<li>Full Credit Reports</li>
								<li>Credit-Based Resident Score</li>
								<li>Tenant Criminal Report</li>
								<li>Custom Leasing Recommendation</li>
								<li>Tenant Eviction Report</li>
							</ul>
						</div>
					</Col>
					<Col xs={{ span: 0 }} sm={{ span: 0 }} lg={{ span: 8, offset: 1 }} xl={{ span: 7 }} xxl={{ span: 5 }}>
						<div className="">
							<Image src={Customer} alt="customer background" />
						</div>
					</Col>
				</Row>
			</div>

			<div className={`${classes.sectionFour} my-5`}>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22 }} sm={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 5 }}>
						<Image src={Repair} alt="manager repairs" />
					</Col>
					<Col xs={{ span: 22 }} sm={{ span: 23, order: 2 }} lg={{ span: 12, offset: 1, order: 0 }} xl={{ span: 9, offset: 1 }} xxl={{ span: 7, offset: 1 }}>
						<div className={`${classes.sectionFourText} mt-sm-5 mt-lg-0`}>
							<h2>Make/Manage Repairs</h2>
							<p className="mb-4">
								As a landlord you have a lot to do, fixing broken pipes is one thing you can cross off
								your list. With Renteez you’ll be kept informed and can decide how involved you are in
								each maintenance need. All your maintenance needs are uploaded into one area where you
								can manage and monitor the issue from initial inquiry through contractor payment all in
								one place.
							</p>
							<div div className={`${classes.feature} mt-sm-5 mt-lg-0`}>
								<div className={classes.circleIcon}>
									<Feature />
								</div>
								<div>
									<h3>Short list your preferred contractors</h3>
								</div>
							</div>
							<Button type="primary" className="btnPrimary d-none">
								List your property
							</Button>
						</div>
					</Col>
				</Row>
			</div>

			<div className={`${classes.sectionFive}`}>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22 }} sm={{ span: 23 }} lg={{ span: 10, order: 0 }} xl={{ span: 8 }} xxl={{ span: 6 }}>
						<h2>Collect Rent</h2>
						<p>
							As a landlord, one of the most important yet taxing things is collecting rent. A recent
							study found that 18% of renters in America are behind in their rent; Renteez takes the pain
							out of your rent collection process by putting all the data front and center so you can
							manage rent collection for all your tenants in one place.
						</p>
					</Col>
					<Col xs={{ span: 22 }} sm={{ span: 23 }} lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }} xxl={{ span: 7, offset: 1 }}>
						<div className={`${classes.services}`}>
							<User className="mr-3" />
							<h3>No Extra Charges</h3>
						</div>
						<div className={`${classes.services}`}>
							<PlaneYellow className="mr-3" />
							<h3>Flexible Payment Options</h3>
						</div>
						<div className={`${classes.services}`}>
							<PlaneBlue className="mr-3" />
							<h3>Get Your Money Fast</h3>
						</div>
						<div className={`${classes.services} ${classes.servicesLast}`}>
							<PlaneGreen className="mr-3" />
							<h3>Payment types for all types of investors!</h3>
						</div>
					</Col>
				</Row>
			</div>

			<div className={`${classes.sectionSix} mt-5`}>
				<div className="d-lg-none">
					<h2 className={`${classes.headingSm}`}>Landlords, are you making profit on your rent payments ?</h2>
				</div>
				<Row justify="center" align="middle">
					<Col xs={{ span: 22 }} sm={{ span: 8, }} lg={{ span: 10 }} xl={{ span: 8 }} xxl={{ span: 6 }}>
						<div className={`${classes.sectionSixImg}`}>
							<Image src={PaymentMobile} alt="cash wallet" />
						</div>
						<div className={`${classes.sectionSixImgMobile}`}>
							<Image src={PaymentSM} alt="cash wallet" />
						</div>
					</Col>
					<Col xs={{ span: 22 }} sm={{ span: 12, offset: 2 }} lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 1 }} xxl={{ span: 7, offset: 1 }}>
						<div className={`${classes.sectionSixText}`}>
							<h2 className={`${classes.smNone}`}>Landlords, are you making profit on your rent payments?</h2>
							<p className="font-600 clr-black"> Compound those profits by converting and staking that rent with Renteez coin!</p>
							<p className="mb-4">
								Renteez coin is a deflationary token that is a great investment even if you are not an active
								user of Renteez.com. Not only do you have the potential of the value of Renteez to increase
								significantly, but you are rewarded for just being a holder! There is a per transaction
								tax that is redistributed to all holders, the more you hold the more you earn! A portion
								of that tax is also distributed to the liquidity pool, creating a stable price point for
								Renteez coin.
							</p>
						</div>
					</Col>
				</Row>
			</div>

			<div className={classes.sectionSeven} justify="center">
				<Row justify="center">
					<Col xs={{ span: 22 }} lg={{ span: 17 }} xl={{ span: 14 }} xxl={{ span: 14 }}>
						<h2>Dashboard</h2>
						<p className={`${classes.description} my-3`}>
							You have a lot to manage, With Renteez it is all at your fingertips on one handy dashboard.
							Manage your rental income, maintenance requests, upcoming tasks and more.
						</p>
						<div className={`${classes.btnSm}`}>
							<button type="button" className="btn btn-primary clr-black d-lg-none">
								Get started with Renteez
							</button>
						</div>
					</Col>
					<Col xs={{ span: 20 }} sm={{ span: 21 }} lg={{ span: 17 }} xl={{ span: 14 }} xxl={{ span: 14 }}>
						<div className={`${classes.dashboardImg}`}>
							<Image src={Dashboard} alt="dashboard" />
						</div>
						<div className={`${classes.dNone}, ${classes.dashboardImgMobile}`}>
							<Image src={DashboardMobile} alt="dashboard" />
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Landlord;

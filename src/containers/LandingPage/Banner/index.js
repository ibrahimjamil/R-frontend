// import Image from 'next/image';
import React from 'react';
import Image from 'next/image';
import DashboardImg from 'public/images/dashboard-img-2.png';
import DashboardImgMobile from 'public/images/dashboard-mobile.png';
import MobileImg from 'public/images/banner-mobile-2.png';
import classes from './style.module.less';

const Banner = () => {
	return (
		<div className={classes.bannerWrapper}>
			<div className="banner-block">
				<div className="banner-text">
					<h1>
						Renting Done Right. <span className="d-block">Finally.</span>
					</h1>
					<p>
						Easy to use mobile tech with a feature for every
						<span className="d-block">step of the landlord and tenant process</span>
					</p>
					<button type="button" className="btn btn-primary clr-black d-none">
						Get Started Now
					</button>
				</div>
				<div className="banner-imgs">
					<div className="mobile">
						<Image src={MobileImg} alt="renting app image" />
					</div>
					<div className="dashboard">
						<Image src={DashboardImg} alt="dashboard profile" />
					</div>
				</div>
				<div className="dashboard-mobile">
					<Image src={DashboardImgMobile} alt="dashboard profile" />
				</div>
			</div>
		</div>
	);
};

export default Banner;

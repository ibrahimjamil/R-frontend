import React from 'react';
import TopBanner from './TopBanner';
import classes from './style.module.less';
import CompanyBlock from './CompanyBlock';
import OurSolutions from './OurSolutions';
import Footer from './Footer';
import RenteezCoin from './RenteezCoin';

const LandingPage = (props) => {
	return (
		<div className={classes.pageWrapper}>
			<TopBanner />
			<OurSolutions />
			<CompanyBlock />
			<RenteezCoin />
			<Footer />
		</div>
	);
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;

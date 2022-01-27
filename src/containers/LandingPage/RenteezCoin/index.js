import React from 'react';
import { Row, Col } from 'antd';
import RenteezCoinBgRight from 'public/images/lp-renteez-coin-right.svg';
import RenteezCoinBgLeft from 'public/images/lp-renteez-coin-left.svg';

// import ReleaseCountDown from '../ReleaseCountDown';

import classes from './style.module.less';

const RenteezCoin = () => {
	return (
		<div className={`${classes.coinBlock} text-center`}>
			<div className={classes.coinImageLeft}>
				<RenteezCoinBgLeft />
			</div>
			<Row className="mt-4" justify="center">
				<Col xs={{ span: 22 }} sm={{ span: 22 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
					<div className={classes.smallText}>COMING SOON</div>
					<h2>Renteez Coin</h2>
					<p>
						Renteez coin is a great investment whether you use our platform or not. There is a 7%
						transaction tax applied to all Renteez transactions that is distributed as follows:
					</p>
				</Col>
			</Row>
			<Row className="mt-4" gutter={10} justify="center">
				<Col className={classes.counterBlock}>
					<div className={classes.greyBlock}>
						<div className={classes.number}>3%</div>
						<div>
							Redistributed to all <span className="d-block">holders of Renteez coin</span>
						</div>
					</div>
				</Col>
				<Col className={classes.counterBlock}>
					<div className={classes.greyBlock}>
						<div className={classes.number}>2%</div>
						<div>Added to Liquidity</div>
					</div>
				</Col>
				<Col className={classes.counterBlock}>
					<div className={classes.greyBlock}>
						<div className={classes.number}>1%</div>
						<div>Added to continued development of Renteez.com</div>
					</div>
				</Col>
				<Col className={classes.counterBlock}>
					<div className={classes.greyBlock}>
						<div className={classes.number}>1%</div>
						<div>Added to marketing of Renteez</div>
					</div>
				</Col>
			</Row>
			<Row justify="center">
				<Col xxl={{ span: 10 }}>
					<p className={classes.dottedBorder}>
						Not only will tenants and landlords be able to earn rewards through staking, but they will earn
						just for being holders!
					</p>
				</Col>
			</Row>
			<div className={classes.coinImageRight}>
				<RenteezCoinBgRight />
			</div>
			<Row justify="center">
				<Col>
					<h2 className={classes.dottedBorder}>Presale update coming soon...</h2>
				</Col>
			</Row>
			{/* <ReleaseCountDown /> */}
		</div>
	);
};
export default RenteezCoin;

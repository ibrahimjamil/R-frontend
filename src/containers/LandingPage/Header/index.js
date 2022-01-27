import React from 'react';
import Logo from 'public/images/logo.svg';
import { useRouter } from 'next/router';
import classes from './style.module.less';

const Header = () => {
	const router = useRouter();
	return (
		<div className={classes.headerWrapper}>
			<header>
				<nav>
					<div className="brand-logo">
						<Logo />
					</div>
					{/* <ul className="nav-links">
						<li>Home</li>
						<li>Features</li>
						<li>Pricing</li>
						<li>About</li>
						<li>Blog</li>
						<li>FAQ</li>
					</ul> */}
					<div className="nav-actions">
						<button type="button" className="btn btn-outline margin-right-1" onClick={() => router.push('/login')}>
							Login
						</button>
						{/* <button type="button" className="btn btn-outline active">
							Sign in
						</button> */}
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Header;

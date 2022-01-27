import { useState } from 'react';
import { Button } from 'antd';
import classes from './style.module.less';
import Landlord from '../Landloard';
import Tenant from '../Tenant';

const CompanyBlock = () => {
	const [active, setActive] = useState(true);

	const handleLandlord = () => {
		return setActive(true);
	};
	const handleTenant = () => {
		return setActive(false);
	};
	return (
		<div>
			<div className={classes.btnGroup}>
				<Button type="primary" className={!active ? classes.btnDim : classes.active} onClick={handleLandlord}>For Landlord</Button>
				<Button type="primary" className={active ? classes.btnDim : classes.active} onClick={handleTenant}>For Tenant</Button>
			</div>
			{
				active ?
					<Landlord />
					:
					<Tenant />
			}
		</div>
	);
};

export default CompanyBlock;

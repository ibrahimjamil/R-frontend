import React, { useState } from 'react';
import SignUpDetails from './SignUpDetails';
import UserRole from './UserRole';

const SignUp = () => {
	const [step, setStep] = useState(0);
	const [user, setUser] = useState({
		role: 'landlord',
	});
	const handleChangeStep = (next) => {
		setStep((prev) => prev + next);
	};
	const handleChange = (key, val) => {
		setUser({ ...user, [key]: val });
	};
	return (
		<>
			{step === 0 && <UserRole handleChangeStep={handleChangeStep} user={user} handleChange={handleChange} />}
			{step === 1 && <SignUpDetails handleChangeStep={handleChangeStep} user={user} />}
		</>
	);
};

export default SignUp;

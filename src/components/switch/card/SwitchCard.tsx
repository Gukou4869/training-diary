import * as React from 'react';
import { useState } from 'react';
import LoginCard from '../../card/login/LoginCard';
import SignupCard from '../../card/signup/SignupCard';

interface SwitchCardProps {
    checked?: boolean;
    handleChecked?: () => void;
    handleGoogleLogin?: () => void;
    handleSubmit?: () => void;
}

const SwitchCard: React.VFC<SwitchCardProps> = props => {
    const { checked, handleChecked, handleGoogleLogin } = props;
    // switch login and sign up
    const [toggleCard, setToggleCard] = useState<boolean>(true);

    const handleToggleCard = (): void => {
        setToggleCard(prevState => !prevState);
    };

    if (toggleCard) {
        return (
            <LoginCard
                checked={checked}
                handleChecked={handleChecked}
                handleGoogleLogin={handleGoogleLogin}
                moveToSignup={handleToggleCard}
            />
        );
    } else {
        return (
            <SignupCard
                moveToLogin={handleToggleCard}
                handleGoogleLogin={handleGoogleLogin}
            />
        );
    }
};

export default SwitchCard;

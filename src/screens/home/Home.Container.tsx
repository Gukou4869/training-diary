import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/index';
import HomeView from './Home.View';

interface HomeContainerProps {
    token: string;
}

export interface LoginInputParams {
    email: string;
    password: string;
}

const HomeContainer: React.FC<HomeContainerProps> = ({ token }) => {
    //login input params
    const [inputParams, setInoputParams] = useState<LoginInputParams>({
        email: '',
        password: '',
    });
    // password memorise state
    const [checked, setChecked] = React.useState(false);

    const handleOnChangeInputParams = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.currentTarget;
        const tempParams: LoginInputParams = {
            ...inputParams,
            [name]: value,
        };
        setInoputParams(tempParams);
    };

    const handleToggleChecked = () => {
        setChecked(prevState => !prevState);
    };

    return (
        <HomeView
            checked={checked}
            inputParams={inputParams}
            handleOnChangeInputParams={handleOnChangeInputParams}
            handleToggleChecked={handleToggleChecked}
        />
    );
};

const MapStateToProps = (store: RootState) => {
    return {
        token: store.session.token,
    };
};
const MapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, null, AnyAction>,
) => {
    return {};
};

export default connect(MapStateToProps, MapDispatchToProps)(HomeContainer);

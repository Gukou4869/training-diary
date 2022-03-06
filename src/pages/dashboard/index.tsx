import * as React from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/index';
import Signout from '@/services/auth/Signout';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = props => {
    return (
        <div className="">
            This is a dashboard
            <button
                onClick={() => {
                    Signout();
                    Router.push('/');
                }}
            >
                log out
            </button>
        </div>
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

export default connect(MapStateToProps, MapDispatchToProps)(Dashboard);

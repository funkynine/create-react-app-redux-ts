import { UPDATE_USER } from '../actions-types';
import { IUserReducer } from 'redux/user-service/interfaces';

const initState: IUserReducer = {
	user: null,
};

const userReducer = (state = initState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_USER:
			return { ...state, user: payload };
		default:
			return state;
	}
};

export default userReducer;

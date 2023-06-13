import { useNavigate, redirect, useLocation, useParams } from 'react-router-dom';

export const useNavigation = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();

	return {
		navigate,
		redirect,
		location,
		params,
	};
};

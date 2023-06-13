import { toast } from 'react-toastify';
import type { ToastOptions } from 'react-toastify';

const settings: ToastOptions = {
	position: toast.POSITION.BOTTOM_RIGHT,
};

const success = (msg: string) => toast.success(msg, settings);
const error = (msg: string) => toast.error(msg, settings);
const warn = (msg: string) => toast.warn(msg, settings);
const info = (msg: string) => toast.info(msg, settings);

export const Notify = {
	success,
	error,
	info,
	warn,
};

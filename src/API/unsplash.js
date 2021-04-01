import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID GqQIvg1tl-BikcgoIHh2yE8ezMBG-K7WzFmc0USIUec',
	},
});

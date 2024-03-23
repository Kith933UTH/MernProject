import axios from 'axios';

// Tạo một instance với các đối số truyền vào riêng biệt
const baseURL = axios.create({
	baseURL: 'https://course-api.com/', //API dùng chung cho toàn bộ dự án
	headers: {
		'Content-Type': 'application/json',
	},
});

export default baseURL;

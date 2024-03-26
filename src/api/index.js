import baseURL from './instance';

const getData = async (url) => baseURL.get(url).then((res) => res.data);
const postData = async (url, data) =>
	baseURL.post(url, data).then((res) => res.data);
const updateData = async (url) => baseURL.patch(url).then((res) => res.data);
const deleteData = async (url) => baseURL.delete(url).then((res) => res.data);

export { getData, postData, updateData, deleteData };

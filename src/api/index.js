import baseURL from './instance';

const getData = (url) => baseURL.get(url).then((res) => res.data);
const postData = (url, data) => baseURL.post(url, data).then((res) => res.data);
const updateData = (url) => baseURL.patch(url).then((res) => res.data);
const deleteData = (url) => baseURL.delete(url).then((res) => res.data);

export { getData, postData, updateData, deleteData };

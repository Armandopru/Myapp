import axios from 'axios';
const ApiDelivery = axios.create({
baseURL: 'http://192.168.1.2:3000/api/users/create',
headers: {
'Content-Type': 'application/json'
}
});
export {ApiDelivery};
import axios from 'axios';
const http_api=axios.create({
    baseURL:'http://localhost/tranthuyquynhduong/public/api',
    timeout:9000,
    headers:{'X-Custom-Header':'footbar'}
});
export default http_api;
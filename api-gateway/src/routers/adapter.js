import axios from 'axios'

// Generic adapter
export default baseURL => axios.create({ baseURL })
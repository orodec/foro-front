import axios from 'axios';

// Default config for AXIOS
export default axios.create(
    {
        responseType: 'json',
        timeout: 6000
    }
)

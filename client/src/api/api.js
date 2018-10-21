import axios from 'axios'

const uploadMessage = async (msg) => {
    try{
        return await axios.post('/message', msg)
    } catch (error) {
        console.error(error)
    }
}

export { uploadMessage }
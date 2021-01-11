import axios from 'axios'
const baseUrl = '/api/v1/event'

const getAllEvents = async () => {
    const request = await axios.get(baseUrl)
    return request.then(response => response.data)
}

const getEvent = async id => {
    const request = await axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const getResults = async id => {
    const request = await axios.get(`${baseUrl}/${id}/results`)
    return request.then(response => response.data)
}

const newEvent = async newEvent => {
    const response = await axios.post(baseUrl, newEvent)
    return response.data
}

const vote = async id => {
    const response = await axios.post(`${baseUrl}/${id}/vote`)
    return response.data
}

export default { getAllEvents, getEvent, getResults, newEvent, vote }

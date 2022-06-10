import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;


export async function saveDestination (destinationData) {
    try {
        const postTravel = await axios({
            url:`${baseUrl}/crear`,
            method: 'POST',
            data: destinationData
        });
        return postTravel;
    } catch (error) {
        console.error(error)
    }
}


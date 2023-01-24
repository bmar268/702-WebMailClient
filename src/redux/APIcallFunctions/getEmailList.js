import axios from "axios";

export const getEmailList = async (pageNumber) => {
    try {
        const response = await axios.get(`https://flipkart-email-mock.now.sh/?page=${pageNumber}`);
        return(response.data.list)
    } catch (error) {
        console.log("ERROR___WHILE_FETCHING_EMAIL_LIST: ", error);
    }
}
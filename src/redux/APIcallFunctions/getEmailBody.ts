import axios from "axios";

export const getEmailBody = async (emailItemId: void) => {
    try {
        const response = await axios.get(`https://flipkart-email-mock.vercel.app/?id=${emailItemId}`);
        return(response.data);
    } catch (error) {
        console.log("ERROR___WHILE_FETCHING_EMAIL_BODY: ", error);
    }
}
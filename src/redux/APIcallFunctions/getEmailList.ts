import axios from "axios";

export const getEmailList = async (pageNumber: void) => {
  try {
    const response = await axios.get(
      // `https://flipkart-email-mock.now.sh/?page=${pageNumber}`,
      `https://custom-email-server.vercel.app/page?page=${pageNumber}`
    );

    console.log("response.data.list: ", response.data.list);

    return response.data.list;
  } catch (error) {
    console.log("ERROR___WHILE_FETCHING_EMAIL_LIST: ", error);
  }
};

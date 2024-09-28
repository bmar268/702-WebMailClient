import axios from "axios";

export const getEmailList = async (pageNumber: void) => {
  try {
    const response = await axios.get(
      `https://custom-email-server.vercel.app/page?page=${pageNumber}`
    );
    return response.data.list;
  } catch (error) {
    console.log("ERROR___WHILE_FETCHING_EMAIL_LIST: ", error);
  }
};

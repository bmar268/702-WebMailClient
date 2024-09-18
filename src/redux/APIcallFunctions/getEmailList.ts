import axios from "axios";

export const getEmailList = async (pageNumber: void) => {
  try {
    const response = await axios.get(
      `https://custom-email-server.vercel.app/page?page=${pageNumber}`
    );

    console.log("response.data.list: ", response.data.list);

    return response.data.list;
  } catch (error) {
    console.log("ERROR___WHILE_FETCHING_EMAIL_LIST: ", error);
  }
};

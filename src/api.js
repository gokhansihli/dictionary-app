import axios from "axios";

export const fetchWord = async (word) => {
  try {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    return data;
  } catch (error) {
    if (error.response) {
      console.log(error);
      throw new Error("Word not found!");
    }
  }
};

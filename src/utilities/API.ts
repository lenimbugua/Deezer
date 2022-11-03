import axios from "axios";
import definedConstants from "@/utilities/defined-constants";

const { baseURL } = definedConstants();

export default (url = baseURL) => {
  return axios.create({
    baseURL: url,
  });
};

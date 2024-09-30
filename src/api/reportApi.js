import axiosInstance from "./api";

const getTransactionsForMonth = (monthYear) => {
  return axiosInstance.get(`/transaction/period-data?date=${monthYear}`);
};

const reportAPI = {
  getTransactionsForMonth,
};

export default reportAPI;

import type { Balance } from "./../interfaces/IBalance";
import httpClient from "~/utils/http";
import { ref } from "vue";
import type { AxiosResponse } from "axios";
const loading = ref(false);
const balance = ref<number>(0);
const useClient = () => {
  const getBalance = async (): Promise<Balance> => {
    loading.value = true;
    try {
      const response: AxiosResponse<Balance> = await httpClient.get(
        "getActualBalance"
      );
      balance.value = +response.data.data.balanceCommerce;
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      loading.value = false;
    }
  };
  return { getBalance, balance, loading };
};
export default useClient;

import type { Provider, Company } from "./../interfaces/IProviders";
import httpClient from "~/utils/http";
import { ref } from "vue";
import type { AxiosResponse } from "axios";
const loading = ref(false);
const providers = ref<Company[]>([]);
const useClient = () => {
  const getProviders = async (): Promise<Provider> => {
    loading.value = true;
    try {
      const response: AxiosResponse<Provider> = await httpClient.get(
        "getProviders"
      );
      providers.value = response.data.data.companies;
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      loading.value = false;
    }
  };
  return { getProviders, providers, loading };
};
export default useClient;

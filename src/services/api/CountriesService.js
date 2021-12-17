import axiosInstance from './index';

class CountriesService {
  constructor() {
    this.countriesUrl = '/countries';
  }

  async index() {
    const { data } = await axiosInstance.get(this.countriesUrl);

    return data;
  }
}

export default new CountriesService();

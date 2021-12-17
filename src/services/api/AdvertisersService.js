import axiosInstance from './index';

class AdvertisersService {
  constructor() {
    this.advertisersUrl = '/advertisers';
    this.campaignsUrl = '/campaigns';
  }

  async login(id) {
    const { data } = await axiosInstance.get(`${this.advertisersUrl}/${id}`);

    return data;
  }

  async getMyCampaigns(id) {
    const { data } = await axiosInstance.get(`${this.campaignsUrl}/filter?advertiser_id=${id}`);

    return data;
  }

  async createCampaign(campaign) {
    const { data } = await axiosInstance.post(`${this.campaignsUrl}`, campaign);

    return data;
  }

  async removeCampaign(id) {
    const { data } = await axiosInstance.delete(`${this.campaignsUrl}/${id}`);

    return data;
  }
}

export default new AdvertisersService();

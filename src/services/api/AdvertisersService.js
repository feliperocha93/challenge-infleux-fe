import axiosInstance from './index';

class AdvertisersService {
  constructor() {
    this.advertisersUrl = '/advertisers';
    this.campaignsUrl = '/campaigns';
  }

  async createCampgin(campaign) {
    const { data } = await axiosInstance.post(`${this.campaignsUrl}`, campaign);

    return data;
  }

  async getMyCampaigns(id) {
    const { data } = await axiosInstance.get(`${this.campaignsUrl}/filter?advertiser_id=${id}`);

    return data;
  }
}

export default new AdvertisersService();

import axiosInstance from './index';

class AdvertisersService {
  constructor() {
    this.advertisersUrl = '/advertisers';
  }

  async getMyCampaigns(id) {
    const { data } = await axiosInstance.get(`/campaigns/filter?advertiser_id=${id}`);

    return data;
  }
}

export default new AdvertisersService();

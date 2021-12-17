/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import axiosInstance from './index';

class PublishersService {
  constructor() {
    this.publishersUrl = '/publishers';
    this.campaignsUrl = '/campaigns';
  }

  async login(id) {
    const { data } = await axiosInstance.get(`${this.publishersUrl}/${id}`);

    return data;
  }

  async getMyCampaigns(id) {
    const { data } = await axiosInstance.get(`${this.publishersUrl}/${id}`);

    const campaigns = [];
    for (const campaign_id of data.campaigns_id) {
      const campaign = await axiosInstance.get(`${this.campaignsUrl}/${campaign_id}`);
      campaigns.push(campaign);
    }

    return campaigns;
  }

  async getBestForMe(country_id) {
    const { data } = await axiosInstance.get(`${this.campaignsUrl}/fetch?country_id=${country_id}`);

    return data;
  }

  // async createCampaign(campaign) {
  //   const { data } = await axiosInstance.post(`${this.campaignsUrl}`, campaign);

  //   return data;
  // }

  // async removeCampaign(id) {
  //   const { data } = await axiosInstance.delete(`${this.campaignsUrl}/${id}`);

  //   return data;
  // }
}

export default new PublishersService();

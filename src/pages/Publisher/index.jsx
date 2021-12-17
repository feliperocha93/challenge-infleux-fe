import { useState, useContext, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import CampaignList from '../../components/CampaignList';

import { Context } from '../../components/App';

import PublishersService from '../../services/api/PublishersService';

function Publisher() {
  const { state } = useContext(Context);
  const [myCampaigns, setMyCampaigns] = useState([]);
  const [bestCampaignsForMe, setBestCampaignsForMe] = useState([]);

  async function fetchMyCampaigns() {
    const response = await PublishersService.getMyCampaigns(state.user.userId);
    setMyCampaigns(response);
  }

  async function fetchBestForMe() {
    const response = await PublishersService.getBestForMe(state.country_id);
    setBestCampaignsForMe(response);
  }

  useEffect(() => {
    fetchMyCampaigns();
    fetchBestForMe();
  }, []);

  async function addCampaign(campaign_id) {
    try {
      await PublishersService.subscribeToCampaign(state.user.userId, campaign_id);
      fetchMyCampaigns();
      fetchBestForMe();
      alert('Subscribed');
    } catch {
      alert('Something is wrong. Try again, please.');
    }
  }

  async function removeCampaign(campaign_id) {
    try {
      await PublishersService.unsubscribeFromCampaign(state.user.userId, campaign_id);
      fetchMyCampaigns();
      alert('Unsubscribed');
    } catch {
      alert('Something is wrong. Try again, please.');
    }
  }

  return (
    <>
      <PageHeader />

      <CampaignList
        label="My campaigns"
        campaigns={myCampaigns}
        handleDeleteClick={removeCampaign}
      />

      <CampaignList
        label="Best for me"
        campaigns={bestCampaignsForMe}
        handleAddClick={addCampaign}
      />
    </>
  );
}

export default Publisher;

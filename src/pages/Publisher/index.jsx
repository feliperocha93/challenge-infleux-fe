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
    // TODO: Filter best for me
    const response = await PublishersService.getMyCampaigns(state.user.userId);
    setBestCampaignsForMe(response);
  }

  useEffect(() => {
    fetchMyCampaigns();
    fetchBestForMe();
  }, []);

  async function removeCampaign(id) {
    try {
      console.log({ id });
      fetchMyCampaigns();
      alert('Deleted');
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
        handleDeleteClick={removeCampaign}
      />
    </>
  );
}

export default Publisher;

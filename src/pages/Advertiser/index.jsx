import { useState, useContext, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import CampaignForm from '../../components/CampaignForm';
import CampaignList from '../../components/CampaignList';

import { Context } from '../../components/App';
import AdvertisersService from '../../services/api/AdvertisersService';

const campaignTypeValues = ['CPM', 'CPC', 'CPI'];

function Advertiser() {
  const { state } = useContext(Context);
  const [myCampaigns, setMyCampaigns] = useState([]);

  const cleanCampaign = {
    name: '',
    advertiser_id: state.user.userId,
    campaign_type: '',
    countries_id: [],
    bid: '',
  };

  const [newCampaign, setNewCampaign] = useState(cleanCampaign);
  const [formIsValid, setFormIsValid] = useState(false);

  async function fetchMyCampaigns() {
    const response = await AdvertisersService.getMyCampaigns(state.user.userId);
    setMyCampaigns(response);
  }

  useEffect(() => {
    fetchMyCampaigns();
  }, []);

  useEffect(() => {
    if (
      newCampaign.name
      && newCampaign.campaign_type
      && newCampaign.countries_id.length > 0
      && newCampaign.bid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [newCampaign]);

  function handleNewCampaignChange(event, field) {
    setNewCampaign({
      ...newCampaign,
      [field]: event.target.value,
    });
  }

  function handleCountriesNewCampaignChange(event) {
    const selectedOptions = Array.from(event.target.options).filter((opt) => opt.selected);
    setNewCampaign({
      ...newCampaign,
      countries_id: selectedOptions.map((opt) => opt.value),
    });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      await AdvertisersService.createCampaign(newCampaign);
      setNewCampaign(cleanCampaign);
      fetchMyCampaigns();
      alert('Created');
    } catch {
      alert('Something is wrong. Try again, please.');
    }
  }

  async function removeCampaign(id) {
    try {
      await AdvertisersService.removeCampaign(id);
      fetchMyCampaigns();
      alert('Deleted');
    } catch {
      alert('Something is wrong. Try again, please.');
    }
  }

  return (
    <>
      <PageHeader />

      <CampaignForm
        label="New Campaign"
        campaign={newCampaign}
        handleFormSubmit={handleFormSubmit}
        handleCampaignChange={handleNewCampaignChange}
        handleCountriesCampaignChange={handleCountriesNewCampaignChange}
        campaignTypeValues={campaignTypeValues}
        countries={state.countries}
        formIsValid={formIsValid}
      />

      <CampaignList
        label="My Campaigns"
        campaigns={myCampaigns}
        handleDeleteClick={removeCampaign}
      />
    </>
  );
}

export default Advertiser;

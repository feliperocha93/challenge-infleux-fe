import { useState, useContext, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import CampaignForm from '../../components/CampaignForm';
import CampaignList from '../../components/CampaignList';

import { Context } from '../../components/App';
import AdvertisersService from '../../services/api/AdvertisersService';

// const myCampaigns = [
//   {
//     name: 'Minha Campanha 1',
//     advertiser_id: '123456789',
//     campaign_type: 'CPM',
//     countries_id: ['123456789', '123456789'],
//     bid: 100.00,
//     publishers: [
//       {
//         publisher_id: '1',
//         publisher_result: 70,
//       },
//       {
//         publisher_id: '1',
//         publisher_result: 70,
//       },
//     ],
//   },
//   {
//     name: 'Minha Campanha 2',
//     advertiser_id: '123456789',
//     campaign_type: 'CPM',
//     countries_id: ['123456789', '123456789'],
//     bid: 100.00,
//     publishers: [
//       {
//         publisher_id: '1',
//         publisher_result: 478,
//       },
//       {
//         publisher_id: '1',
//         publisher_result: 478,
//       },
//     ],

//   },
// ];

const campaignTypeValues = ['CPM', 'CPC', 'CPI'];

function Advertiser() {
  const { state } = useContext(Context);

  const [myCampaigns, setMyCampaigns] = useState([]);

  const [newCampaign, setNewCampaign] = useState({
    name: '',
    advertiser_id: state.user.userId,
    campaign_type: '',
    countries_id: [],
    bid: '',
  });
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    async function fetchMyCampaigns() {
      const response = await AdvertisersService.getMyCampaigns(state.user.userId);
      console.log({ response });
      setMyCampaigns(response);
    }
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
  }, [newCampaign, setFormIsValid]);

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

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <PageHeader />

      <CampaignList label="Minhas campanhas" campaigns={myCampaigns} />

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
    </>
  );
}

export default Advertiser;

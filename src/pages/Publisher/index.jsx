import PageHeader from '../../components/PageHeader';
import CampaignList from '../../components/CampaignList';

const myCampaigns = [
  {
    name: 'Minha Campanha 1',
    advertiser_id: '123456789',
    campaign_type: 'CPM',
    countries_id: ['123456789', '123456789'],
    bid: 100.00,
    publishers: [
      {
        publisher_id: '1',
        publisher_result: 70,
      },
      {
        publisher_id: '1',
        publisher_result: 70,
      },
    ],
  },
  {
    name: 'Minha Campanha 2',
    advertiser_id: '123456789',
    campaign_type: 'CPM',
    countries_id: ['123456789', '123456789'],
    bid: 100.00,
    publishers: [
      {
        publisher_id: '1',
        publisher_result: 478,
      },
      {
        publisher_id: '1',
        publisher_result: 478,
      },
    ],

  },
];

const campaignsForMe = [
  {
    name: 'Campanha para mim 1',
    advertiser_id: '123456789',
    campaign_type: 'CPM',
    countries_id: ['123456789', '123456789'],
    bid: 100.00,
    publishers: [
      {
        publisher_id: '1',
        publisher_result: 70,
      },
      {
        publisher_id: '11',
        publisher_result: 701,
      },
    ],
  },
  {
    name: 'Campanha para mim 2',
    advertiser_id: '123456789',
    campaign_type: 'CPM',
    countries_id: ['123456789', '123456789'],
    bid: 100.00,
    publishers: [
      {
        publisher_id: '1',
        publisher_result: 478,
      },
      {
        publisher_id: '15',
        publisher_result: 4782,
      },
    ],

  },
];

function Publisher() {
  return (
    <>
      <PageHeader />

      <CampaignList label="Minhas campanhas" campaigns={myCampaigns} />

      <CampaignList label="Campanhas para mim" campaigns={campaignsForMe} />
    </>
  );
}

export default Publisher;

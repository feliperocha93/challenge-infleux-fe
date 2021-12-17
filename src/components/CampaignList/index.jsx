import PropTypes from 'prop-types';

import { ListContent } from './styles';

import CampaignCard from '../CampaignCard';

function CampaignList({ label, campaigns }) {
  return (
    <>
      <h2>{label}</h2>

      <ListContent>
        {campaigns.map((campaign) => (
          <CampaignCard
            campaign={campaign}
            key={campaign.name}
          />
        ))}
      </ListContent>
    </>
  );
}

CampaignList.propTypes = {
  label: PropTypes.string.isRequired,
  campaigns: PropTypes.array.isRequired,
};

export default CampaignList;

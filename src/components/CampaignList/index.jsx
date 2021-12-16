import PropTypes from 'prop-types';

import { ListTitle, ListContent } from './styles';

import CampaignCard from '../CampaignCard';

function CampaignList({ label, campaigns }) {
  return (
    <>
      <ListTitle>{label}</ListTitle>

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

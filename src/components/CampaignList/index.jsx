import PropTypes from 'prop-types';

import { ListContent } from './styles';

import CampaignCard from '../CampaignCard';

function CampaignList({ label, campaigns, handleDeleteClick }) {
  return (
    <>
      <h2>{label}</h2>

      <ListContent>
        {campaigns.map((campaign) => (
          <CampaignCard
            campaign={campaign}
            handleDeleteClick={handleDeleteClick}
            key={campaign._id}
          />
        ))}
      </ListContent>
    </>
  );
}

CampaignList.propTypes = {
  label: PropTypes.string.isRequired,
  campaigns: PropTypes.array.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default CampaignList;

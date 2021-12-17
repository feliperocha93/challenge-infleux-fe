import PropTypes from 'prop-types';

import { AiOutlineDelete, AiOutlineUserAdd } from 'react-icons/ai';

import { Card, CardHeader } from './styles';

function CampaignCard({ campaign, handleDeleteClick, handleAddClick }) {
  const {
    _id, name, advertiser_id, campaign_type, countries_id, bid, publishers,
  } = campaign;

  return (
    <Card>
      <CardHeader>
        <h3>{name}</h3>

        {handleDeleteClick
        && (
        <AiOutlineDelete
          onClick={() => handleDeleteClick(_id)}
          size={20}
          fill="#F63131"
          style={{ cursor: 'pointer' }}
        />
        )}

        {handleAddClick
        && (
        <AiOutlineUserAdd
          onClick={() => handleAddClick(_id)}
          size={20}
          fill="#C60A47"
          style={{ cursor: 'pointer' }}
        />
        )}
      </CardHeader>

      <ul>
        <li>
          <b>
            Advertiser:
          </b>
          {' '}
          {advertiser_id}
        </li>
        <li>
          <b>
            Campaign Type:
          </b>
          {' '}
          {campaign_type}
        </li>
        <li>
          <b>
            Countries:
          </b>
          {' '}
          {countries_id}
        </li>
        <li>
          <b>
            Bid:
          </b>
          {' '}
          {bid}
        </li>
        <li>
          <b>
            Publishers:
          </b>
          {' '}
          {publishers.map((publisher) => `${publisher.publisher_id}, `)}
        </li>
      </ul>
    </Card>
  );
}

CampaignCard.propTypes = {
  campaign: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    advertiser_id: PropTypes.string,
    campaign_type: PropTypes.string,
    countries_id: PropTypes.array,
    bid: PropTypes.number,
    publishers: PropTypes.array,
  }).isRequired,
  handleDeleteClick: PropTypes.func,
  handleAddClick: PropTypes.func,
};

CampaignCard.defaultProps = {
  handleDeleteClick: null,
  handleAddClick: null,
};

export default CampaignCard;

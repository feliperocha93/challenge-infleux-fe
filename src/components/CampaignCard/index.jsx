import PropTypes from 'prop-types';

import { Card } from './styles';

function CampaignCard({ campaign }) {
  const {
    name, advertiser_id, campaign_type, countries_id, bid, publishers,
  } = campaign;

  return (
    <Card>
      <h3>{name}</h3>

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
    name: PropTypes.string,
    advertiser_id: PropTypes.string,
    campaign_type: PropTypes.string,
    countries_id: PropTypes.array,
    bid: PropTypes.number,
    publishers: PropTypes.array,
  }).isRequired,
};

export default CampaignCard;

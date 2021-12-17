/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form } from './styles';

function CampaignForm({
  label,
  campaign,
  handleFormSubmit,
  handleCampaignChange,
  handleCountriesCampaignChange,
  campaignTypeValues,
  countries,
  formIsValid,
}) {
  return (
    <>
      <h2>{label}</h2>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={campaign.name}
          onChange={(e) => handleCampaignChange(e, 'name')}
        />

        <Input
          type="text"
          value={campaign.advertiser_id}
          disabled
        />

        <Select
          name="campaign-type"
          id="campaign-type"
          onChange={(e) => handleCampaignChange(e, 'campaign_type')}
        >
          <option label="Select a type" disabled selected />
          {campaignTypeValues.map((type) => <option value={type} label={type} />)}
        </Select>

        <Select
          name="countries"
          id="countries"
          onChange={handleCountriesCampaignChange}
          multiple
        >
          <option label="Select countries" disabled selected />
          {countries.map((country) => <option value={country._id} label={country.name} />)}
        </Select>

        <Input
          type="text"
          placeholder="BID"
          value={campaign.bid}
          onChange={(e) => handleCampaignChange(e, 'bid')}
        />

        <Button type="submit" disabled={!formIsValid}>
          Create Campaign
        </Button>
      </Form>
    </>
  );
}

CampaignForm.propTypes = {
  label: PropTypes.string.isRequired,
  campaign: PropTypes.string.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleCampaignChange: PropTypes.func.isRequired,
  handleCountriesCampaignChange: PropTypes.func.isRequired,
  campaignTypeValues: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
  formIsValid: PropTypes.bool.isRequired,
};

export default CampaignForm;

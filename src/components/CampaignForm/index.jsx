import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form, Label } from './styles';

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
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Name"
          value={campaign.name}
          onChange={(e) => handleCampaignChange(e, 'name')}
        />

        <Label>Advertiser ID</Label>
        <Input
          type="text"
          value={campaign.advertiser_id}
          disabled
        />

        <Label>Campaign type</Label>
        <Select
          name="campaign-type"
          id="campaign-type"
          onChange={(e) => handleCampaignChange(e, 'campaign_type')}
        >
          <option value="" label="Select a type" disabled selected />
          {campaignTypeValues.map((type) => (
            <option value={type} label={type} key={type} />
          ))}
        </Select>

        <Label>Countries</Label>
        <Select
          name="countries"
          id="countries"
          onChange={handleCountriesCampaignChange}
          multiple
        >
          <option value="" label="Select countries" disabled selected />
          {countries.map((country) => (
            <option value={country._id} label={country.name} key={country._id} />
          ))}
        </Select>

        <Label>BID</Label>
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
  campaign: PropTypes.object.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleCampaignChange: PropTypes.func.isRequired,
  handleCountriesCampaignChange: PropTypes.func.isRequired,
  campaignTypeValues: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
  formIsValid: PropTypes.bool.isRequired,
};

export default CampaignForm;

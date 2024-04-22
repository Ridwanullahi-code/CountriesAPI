import express from 'express';
import countryController from '../controllers/countryController';

const router = express.Router();

// Define the countries endpoint
router.post('/countries', countryController.createCountry);
router.get('/countries', countryController.getAllCountries);
router.get('/countries/:countryCode', countryController.getCountryByCode);
router.put('/countries/:code', countryController.updateCountry);
router.delete('/countries', countryController.deleteAllCountries);
router.delete('/countries/:countryCode', countryController.deleteCountryByCode)

export default router;  
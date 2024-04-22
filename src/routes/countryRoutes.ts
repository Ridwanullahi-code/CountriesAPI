import express from 'express';
import countryController from '../controllers/countryController';

const router = express.Router();

// Define the countries endpoint
router.get('/countries', countryController.getAllCountries);
router.get('/countries/:countryCode', countryController.getCountryByCode);
router.get('/countries/:countryName', countryController.getCountryByName);
router.get('/countries/:countryCode/currency', countryController.getCurrencyByCountryCode)
router.get('/countries/:countryCode/government', countryController.getGovernmentByCountryCode)
router.get('/countries/:countryCode/gdp', countryController.getGDPByCountryCode)

export default router;  
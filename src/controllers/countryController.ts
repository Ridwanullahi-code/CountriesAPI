import { Request, Response } from 'express';
import countryModel from '../models/countryModel';

async function getAllCountries(req: Request, res: Response): Promise<void> {
  try {
    const countries = await countryModel.getAllCountries();
    res.status(200).json(countries);
  } catch (error) {
    console.error('Error retrieving countries:', error);
    res.status(500).json({ error: error.message });
  }
}

async function getCountryByName(req: Request, res: Response): Promise<void> {
  const { countryName } = req.params;
  try {
    const country = await countryModel.getCountryByName(countryName);
    res.status(200).json(country);
  } catch (error) {
    console.error('Error retrieving countries:', error);
    res.status(500).json({ error: error.message });
  }
}

async function getCountryByCode(req: Request, res: Response): Promise<void> {
  const { countryCode } = req.params;
  try {
    const country = await countryModel.getCountryByCode(countryCode);
    res.status(200).json(country);
  } catch (error) {
    console.error('Error retrieving country:', error);
    res.status(404).json({ error: error.message });
  }
}

async function getCurrencyByCountryCode(req: Request, res: Response): Promise<void> {
  const { countryCode } = req.params;
  try {
    const country = await countryModel.getCurrencyByCountryCode(countryCode);
    res.status(200).json(country);
  } catch (error) {
    console.error('Error retrieving country:', error);
    res.status(404).json({ error: error.message });
  }
}

async function getGovernmentByCountryCode(req: Request, res: Response): Promise<void> {
  const { countryCode } = req.params;
  try {
    const country = await countryModel.getGovermentByCountryCode(countryCode);
    res.status(200).json(country);
  } catch (error) {
    console.error('Error retrieving country:', error);
    res.status(404).json({ error: error.message });
  }
}
async function getGDPByCountryCode(req: Request, res: Response): Promise<void> {
  const { countryCode } = req.params;
  try {
    const country = await countryModel.getGDPByCountryCode(countryCode);
    res.status(200).json(country);
  } catch (error) {
    console.error('Error retrieving country:', error);
    res.status(404).json({ error: error.message });
  }
}

export default {
  getAllCountries,
  getCountryByCode,
  getCountryByName,
  getCurrencyByCountryCode,
  getGovernmentByCountryCode,
  getGDPByCountryCode
};

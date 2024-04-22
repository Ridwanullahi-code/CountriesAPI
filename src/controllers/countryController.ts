import { Request, Response } from 'express';
import countryModel from '../models/countryModel';
import { db } from '../models/db.server';

async function createCountry(req: Request, res: Response): Promise<void> {
  try {
    const data = req.body;
    const createdCountry = await countryModel.createCountry(data);
    res.status(201).json(createdCountry);
  } catch (error) { 
    console.error('Error creating country:', error);
    res.status(500).json({ error: error.message });
  }
}

async function getAllCountries(req: Request, res: Response): Promise<void> {
  try {
    const countries = await countryModel.getAllCountries();
    res.status(200).json(countries);
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

async function updateCountry(req: Request, res: Response): Promise<void> {
  const { code } = req.params;
  const newData = req.body;
  try {
    const updatedCountry = await countryModel.updateCountry(code, newData);
    res.status(200).json(updatedCountry);
  } catch (error) {
    console.error(`Error updating country with code ${code}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteAllCountries(req: Request, res: Response): Promise<void> {
  try {
    await db.country.deleteMany();
    res.status(204).send(); 
  } catch (error) {
    console.error('Error deleting countries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteCountryByCode(req: Request, res: Response): Promise<void> {
  const { countryCode } = req.params;
  try {
    await countryModel.deleteCountryByCode(countryCode);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting country:', error);
    res.status(404).json({ error: error.message });
  }
}

export default {
  createCountry,
  getAllCountries,
  getCountryByCode,
  updateCountry,
  deleteAllCountries,
  deleteCountryByCode,
};

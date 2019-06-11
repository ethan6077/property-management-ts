import { PropertyI } from '../types';

export async function fetchPropertiesList(): Promise<PropertyI[]> {
  try {
    const response = await fetch(
      'https://code-challenge.activepipe.com/challenge/properties'
    );
    const dataInJson = await response.json();
    return dataInJson;
  } catch (e) {
    console.warn(e);
    return [];
  }
}

export function fetchPropertiesList(): Promise<any> {
  return fetch('https://code-challenge.activepipe.com/challenge/properties');
}

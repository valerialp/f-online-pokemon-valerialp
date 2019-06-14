const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

const getData = () => fetch(ENDPOINT).then(response => response.json());

export default getData;
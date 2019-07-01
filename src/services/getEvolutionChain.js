
const getEvolutionChain = (url) => {
    return fetch(url).then(response => response.json());
};
export default getEvolutionChain;
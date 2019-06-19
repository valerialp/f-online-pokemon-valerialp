const getDetail = url =>  fetch(url).then(response => response.json());

export default getDetail;

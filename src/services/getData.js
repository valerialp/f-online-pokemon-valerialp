
const url = "https://pokeapi.co/api/v2/pokemon/?limit=25";

const getData = () => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const dataInfo = [];
  
          return data.results.map(item =>
            fetch(item.url)
              .then(response => response.json())
              .then(item => {
                dataInfo.push(item);
                console.log(dataInfo)
                return dataInfo;
              })
              
          );
        });
    }

// const getData = () => {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const dataInfo = data.results.map(item =>
//         fetch(item.url)
//           .then(response => response.json())
//           .then(item => {
//             dataInfo.push(item);
//             return dataInfo;
//           })
//       );
//     //   Promise.all(dataInfo)
//     //   .then(dataInfo => {
//     //     dataInfo.sort((a, b) => a.id - b.id);
//     //     return dataInfo
//     //   });
//     });
// };

export { getData };

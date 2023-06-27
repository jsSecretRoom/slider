export async function randomFetch(apy) {
    try {
      const response = await fetch(apy);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.log('Error: ' + response.status);
      }
    } catch (error) {
      console.log('Error: ' + error);
    }
}
  
export function randomFoto(masivfoto, apy) {
const img = document.querySelectorAll(masivfoto);

img.forEach(async (item) => {
    const fetchedData = await randomFetch(apy);
    if (fetchedData) {
    if (apy === 'https://dog.ceo/api/breeds/image/random') {
        const imageSrc = fetchedData.message;
        item.src = imageSrc;
    } else if (apy === 'https://api.chucknorris.io/jokes/random') {
        const joke = fetchedData.value;
        const roflElement = document.querySelector('.rofl');
        roflElement.textContent = joke;
    }
    }
});
}
  
export function updateRoflElement() {
const roflElement = document.querySelector('.rofl');
roflElement.textContent = 'Loading...';

randomFetch('https://api.chucknorris.io/jokes/random')
    .then((fetchedData) => {
    if (fetchedData) {
        const joke = fetchedData.value;
        roflElement.textContent = joke;
    }
    })
    .catch((error) => {
    console.log('Error: ' + error);
    });
}
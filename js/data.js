/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/
const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)
  return data;
}
const getDataLocations = (data)=>{
    const places = []
    
    data.forEach(stay => {
        if(!places.includes(stay.city)){
          places.push(stay.city);
        }
    });
    return places;
}
export default {
  getData, getDataLocations
}
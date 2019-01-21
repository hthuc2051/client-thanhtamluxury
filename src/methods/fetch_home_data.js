import axios from 'axios'

export const fetch_home_data = async() => {
  let results = await axios.get('http://localhost:3000/products')
  console.log(results);
  return results.data;
}

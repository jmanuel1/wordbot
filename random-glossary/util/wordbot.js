export default async function wordbot({count}) {
  const baseURL = 'https://api.noopschallenge.com/wordbot';
  const parameters = '?' + constructQueryString(count);
  const response = await fetch(baseURL + parameters);
  const json = await response.json();
  return json.words;
}

function constructQueryString(count) {
  return `count=${count}`;
}

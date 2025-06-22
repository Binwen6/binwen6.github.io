const { GoogleAuth } = require('google-auth-library');
const auth = new GoogleAuth({
  keyFile: 'kinetic-cosmos-453002-k3-f44e8fa9c7d5.json', // Make sure this path is correct
  scopes: 'https://www.googleapis.com/auth/analytics.readonly',
});
async function getAccessToken() {
  const client = await auth.getClient();
  const token = await client.getAccessToken();
  console.log(token);
}
getAccessToken();
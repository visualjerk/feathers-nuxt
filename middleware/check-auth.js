const cookieName = 'feathers-jwt';

function getTokenFromRequest (req) {
  if (!req || !req.headers || !req.headers.cookie) return;
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookieName}=`));
  if (!jwtCookie) return;
  return jwtCookie.split('=')[1];
}

export default function ({isServer, store, req, feathers}) {
  console.log('Checking JWT authentication...');

  const accessToken = (isServer) ? getTokenFromRequest(req) : window.localStorage.getItem(cookieName);
  if (!accessToken) {
    console.log('Skipping JWT authentication (no token)');
    return;
  }

  return feathers.authenticate({strategy: 'jwt', accessToken})
    .then(response => {
      console.log('JWT authentication success!');
      store.commit('auth/SET_USER', response);
    })
    .catch(error => {
      console.log('JWT authentication failed!');
      store.commit('auth/SET_USER', null);
    });
}

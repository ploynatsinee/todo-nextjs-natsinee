// import tls from 'node:tls';

export const tlsConnection = async (req, res) => {
  let tls;
  try {
    tls = await import("node:tls");
    console.log("tls is connected")
  } catch (err) {
    console.log("tls support is disabled!");
  }
};

export const config = {
    matcher: '/api/signup',
}
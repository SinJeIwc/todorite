export default function getCookie() {
  const [_, token] = document.cookie.split('=');
  return token;
}

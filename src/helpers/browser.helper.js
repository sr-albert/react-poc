/**
 * Return the browser name
 * - Chrome
 * - Firefox
 * - Safari
 * - Edge
 * - IE
 * - Opera
 */
export const browserDetech = () => {
  const ua = navigator.userAgent;
  let browserName = "Unknown";
  if (ua.search(/Chrome/) > 0) {
    browserName = "Chrome";
  } else if (ua.search(/Firefox/) > 0) {
    browserName = "Firefox";
  } else if (ua.search(/Safari/) > 0) {
    browserName = "Safari";
  } else if (ua.search(/Edge/) > 0) {
    browserName = "Edge";
  } else if (ua.search(/MSIE/) > 0) {
    browserName = "IE";
  } else if (ua.search(/Opera/) > 0) {
    browserName = "Opera";
  }
  return browserName;
};

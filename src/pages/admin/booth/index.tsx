import BoothAdminAppView from "./app/BoothAdminAppView";
// import BoothAdminWebView from './web/BoothAdminWebView';

const BoothAdminEntry = () => {
  // const isMobile = /iPhone|Android/i.test(navigator.userAgent);
  // return isMobile ? <BoothAdminAppView /> : <BoothAdminWebView />;
  return <BoothAdminAppView />;
};

export default BoothAdminEntry;

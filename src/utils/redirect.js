export const _handleDirect = ({ router, destination, query }) => {
  if (destination) {
    router.push({
      pathname: destination,
      query,
    });
  }
};

export const handleDirectToHome = (router) => {
  _handleDirect({
    router,
    destination: '/home',
  });
};

export const handleDirectToLogin = (router) => {
  _handleDirect({
    router,
    destination: '/auth/login',
  });
};

export const handleDirectToHotel = (router) => {
  _handleDirect({
    router,
    destination: '/hotel/hotel',
  });
};

export const handleDirectToTourDetail = (router, id) => {
  _handleDirect({
    router,
    destination: '/tour/detail',
    query: { id },
  });
};

export const handleGoBack = (router) => {
  router.back();
};

export const isMobileView = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  return '/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i'.test(
    userAgent,
  );
};

export const reloadWithLocale = ({ router, locale }) => {
  router.push(router.asPath, router.asPath, { locale });
};

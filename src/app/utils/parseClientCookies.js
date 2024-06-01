const parseClientCookies = (source) => {
  if (source.includes(";")) {
    return source.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    }, {});
  } else {
    const cookie = source.split("=");
    return Object.fromEntries([cookie]);
  }
};

export default parseClientCookies;

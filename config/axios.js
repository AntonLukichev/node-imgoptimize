module.exports = {
  timeout: 1000 * 10,
  method: 'get',
  responseType: 'stream',
  withCredentials: false,
  maxContentLength: 1024 * 1024 * 20, // 20 Mb
  maxRedirects: 5
};

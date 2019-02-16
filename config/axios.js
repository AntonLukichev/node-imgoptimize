exports.axiosConfig = {
  timeout: 1000 * 10,
  method: 'get',
  responseType: 'stream',
  withCredentials: false,
  maxContentLength: 1024 * 1024 * 10, // 10 Mb
  maxRedirects: 2
}

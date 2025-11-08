// puppeteer.config.cjs
module.exports = {
  launch: {
    dumpio: true,               // show browser logs in CI
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--no-zygote',
      '--single-process',       // works in most containers
    ],
  },
};

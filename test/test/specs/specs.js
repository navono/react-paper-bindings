module.exports = {
  'Case01: show a react logo': function(browser) {
    browser
      .compareScreenshotForUrls(
        'http://localhost:3000/1/paper',
        'http://localhost:3000/1/react',
        0.01)
      .end()
  },
  'Case02: set position with applyMatrix=true or false': function(browser) {
    browser
      .compareScreenshotForUrls(
        'http://localhost:3000/2/paper',
        'http://localhost:3000/2/react',
        0.01)
      .compareScreenshotForUrls(
        'http://localhost:3000/2/paper?applyMatrix=false',
        'http://localhost:3000/2/react?applyMatrix=false',
        0.01)
      .compareScreenshotForUrls(
        'http://localhost:3000/2/paper/update',
        'http://localhost:3000/2/react/update',
        0.01)
      .compareScreenshotForUrls(
        'http://localhost:3000/2/paper/update?applyMatrix=false',
        'http://localhost:3000/2/react/update?applyMatrix=false',
        0.01)
      .end()
  },
  'Case03: set pivot & position with applyMatrix=true or false': function(browser) {
    browser
      .compareScreenshotForUrls(
        'http://localhost:3000/3/paper',
        'http://localhost:3000/3/react',
        0.01)
      .compareScreenshotForUrls(
        'http://localhost:3000/3/paper?applyMatrix=false',
        'http://localhost:3000/3/react?applyMatrix=false',
        0.01)
      .compareScreenshotForUrls(
        'http://localhost:3000/3/paper/update',
        'http://localhost:3000/3/react/update',
        0.01)
      .compareScreenshotForUrls(
        'http://localhost:3000/3/paper/update?applyMatrix=false',
        'http://localhost:3000/3/react/update?applyMatrix=false',
        0.01)
      .end()
  },
  'Case04: set pivot & position & rotation with applyMatrix=true or false': function(browser) {
    browser
      .compareScreenshotForUrls(
        'http://localhost:3000/4/paper',
        'http://localhost:3000/4/react',
        0.01)
      .compareScreenshotForUrls(
        'http://localhost:3000/4/paper?applyMatrix=false',
        'http://localhost:3000/4/react?applyMatrix=false',
        0.01)
      .compareScreenshotForUrls(
        'http://localhost:3000/4/paper/update',
        'http://localhost:3000/4/react/update',
        0.01)
      .compareScreenshotForUrls(
        'http://localhost:3000/4/paper/update?applyMatrix=false',
        'http://localhost:3000/4/react/update?applyMatrix=false',
        0.01)
      .end()
  },
};

function warmingRequireCache(id, mockId) {
  const filename = require.resolve(id);
  const mockFilename = require.resolve(mockId);
  if (require.cache[filename]) {
    delete require.cache[filename];
  }
  require(mockId);
  require.cache[filename] = require.cache[mockFilename];
}

warmingRequireCache('stylelint/lib/formatters/stringFormatter', './string-formatter-intercept');

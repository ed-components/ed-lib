export default {
  layout: "emd.njk",
  eleventyComputed: {
    emdId: data => data.page.url.substr(1, data.page.url.length - 2)
  }
};

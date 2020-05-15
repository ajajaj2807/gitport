const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const client = require("./client");

module.exports = {
  // Make sure that your node enviroment supports async/await
  exportPathMap: async function (defaultPathMap) {
    const path = await client
      // get all the posts and return those with slugs
      .fetch('*[_type == "details"].slug.current')
      .then((data) =>
        // use reduce to build an object with routes
        // and select the blog.js file, and send in the
        // correct query paramater.
        data.reduce(
          (acc, slug) => ({
            "/": { page: "/" },
            ...acc,
            [`/details/${slug}`]: { page: "/details", query: { slug } },
          }),
          {}
        )
      )
      .catch(console.error);
    return path;
  },
};

module.exports = withCSS(withSass());

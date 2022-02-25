module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "8DSh8L49iogQd1jNUtFqPcNZWmkOuRNF7dT4ckBBQYQ",
      "spaceId": "f8prwnjrws8j"
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-image"]
};
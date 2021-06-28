const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  //const layoutTemplate = path.resolve(`src/templates/pageTemplate.js`);
  // const commercialLayout = path.resolve(`src/templates/commercialTemplate.js`)
  const EchelonPartners = path.resolve(`src/templates/ArtworkProducts.js`);

  const graphCMSPages = graphql(`
    query {
      allGraphCmsArtWork {
        edges {
          node {
            slug
            header
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    result.data.allGraphCmsArtWork.edges.forEach((edge) => {
      if (edge.node.slug === "404") {
        // for 404 page we use custom page at src/pages/404.js
        return;
      }
      createPage({
        path: `/art/${edge.node.slug}`,
        component: EchelonPartners,
        context: {
          slug: edge.node.slug,
        },
      });
    });
  });
  //shopify Commercial query

  return Promise.all([graphCMSPages]);
};

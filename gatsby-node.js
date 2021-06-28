const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  //const layoutTemplate = path.resolve(`src/templates/pageTemplate.js`);
  // const commercialLayout = path.resolve(`src/templates/commercialTemplate.js`)
  const EchelonPartners = path.resolve(`src/templates/ArtworkProducts.js`);
  const ArtCollections = path.resolve(`src/templates/ArtworkCollection.js`);
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
const shopifyCommercialPages = graphql(`
    query {
 shopifyCollection(handle: {eq: "summer"}) {
    products {
      id
      title
      priceRange {
        maxVariantPrice {
          amount
        }
      }
      images {
        originalSrc
      }
    }
  }
    }
  `).then(result => {
      console.log(result)
        if (result.errors) {
            throw result.errors;
        }
        result.data.shopifyCollection.products.forEach(edge => {
           
            createPage({
                path: `/artwork/${edge.title}`,
                component: EchelonPartners,
                context: {
                    id: edge.id
                }
            });
        });
    });



    ///shopify collections

    const shopifyCollectionPages = graphql(`
    query {
 allShopifyCollection {
    edges {
      node {
        title
         id
      }
    }
  }
    }
  `).then(result => {
      console.log(result)
        if (result.errors) {
            throw result.errors;
        }
        result.data.allShopifyCollection.edges.forEach(edge => {
           
            createPage({
                path: `/collection/${edge.node.title}`,
                component:ArtCollections,
                context: {
                    CollectionId: edge.node.id
                }
            });
        });
    });
  return Promise.all([graphCMSPages,shopifyCommercialPages,shopifyCollectionPages ]);
};

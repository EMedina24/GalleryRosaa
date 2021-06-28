module.exports = {
  siteMetadata: {
    title: `Galleria La Rosa`,
    description: `Fine Art`,
    author: `Edgardo J Medina`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        shopName: `galleryrosa`,
        accessToken: `8b60aa062da9b90dbf14ed07611e01a4`,
        //shouldConfigureSourcePlugin: true, // default
        //shouldWrapRootElementWithProvider: true, // default
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-us-east-1.graphcms.com/v2/ckq5kdifrnaeg01w7auvn1hk2/master",
        token:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjQyMTgyNDcsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrcTVrZGlmcm5hZWcwMXc3YXV2bjFoazIvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWIxNTgyYmUtNDI3MC00YjNkLWI1NDktOGQ4MGNiYWU3M2Y3IiwianRpIjoiY2txNWxsd2JrbzdiNzAxdzdndHZmaHExdyJ9.nGHzti5CV2GKXIf-KFVAo80eGxsaI_y-1J9nGF-lS0nlC_xPgfStSva-gR2-XdYs80zaFjHcTPFRjLjei3GFfT7tM6f2QLQbMM_0USDv0s17GRQ4O_CTOz4MZAOGykhju6GvRSzslMap5s2Pe4uCZoku8Gz9S9zZqY86PuGQvy3c6WtwJJflwyZ7JEG1zs2omYvWs7D0CEkIatNRM0AM3UxL3NF__XASTqB25rrvTfHFPFkom3O8iJSQNmzgmPCGXj3zi--wd9Y9yBmZRUB6bSTw2x7kMvG-ZR0Rs6xQYw7N-XsBA31gzzSIriLqyPLRYUvwSIFKNlT1d9AS9CV-2c-JW8eQRBgm35rDp2GOJhdYkP29w_fpztOhcfKBfxJ5ifEkgKyti2nCmlrxJoeZNC1tQgZ_7SbewFdN00aUGMIQ80_m0F-9-Xsmc_rPdXaMx9_ltJwtTkPdD49ZJXujGFCmrY8KUpi005TQCdO_Z4H-AlS_u1AoqUQ5AyKMA5B2umcDuUuMimFs4NGdlffzj7UX-_b9H7m5DA-xOlGrO-y0pBQ-0BZiKw3VXnBPEJVrtro2UiNwz1lKORmLe_eQDFE-8WprPrthobLNx7Gs7bZplBJZ_G6cBmYtej0Gm3KP9-tFEpqdx9DCFiGdGvHqteKKqY4TA2Cbvpperw_qq5M",
      },
    },

    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-client-side-redirect`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Echelon Commercial`,
        short_name: `Commercial`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

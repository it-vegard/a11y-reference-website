import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductList from "../components/product-list"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Clothes</h1>
    <h2>Coats</h2>
    <ProductList type="coat" />
    <h2>Blazers</h2>
    <ProductList type="blazer" />
    <h2>Suits</h2>
    <ProductList type="suit" />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

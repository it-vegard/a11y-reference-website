import React, { Fragment } from "react"

import {
  getAllGendersForProducts,
  getAllTypesForProducts,
} from "../../util/products-util"
import { capitalizeAllWords } from "../../util/text-util"
import ProductList from "../product-list"
import Heading from "../semantic-heading"
import { Section } from "../semantic-region"

const ProductCategory = ({ products }) => {
  const genders = getAllGendersForProducts(products)
  const types = getAllTypesForProducts(products)
  if (types.length === 1 && genders.length === 1) {
    // Product type listing page
    return (
      <Fragment>
        <Heading>{capitalizeAllWords(types[0])}</Heading>
        <ProductList products={products} />
      </Fragment>
    )
  } else if (genders.length === 1) {
    // Gender listing page
    return (
      <Fragment>
        <Heading>{`${capitalizeAllWords(genders[0])}'s Fashion`}</Heading>
        {types.map(type => (
          <Section key={type}>
            <ProductCategory
              products={products.filter(product => product.type === type)}
            />
          </Section>
        ))}
      </Fragment>
    )
  } else {
    // Front page
    return genders.map(gender => (
      <Section key={gender}>
        <Heading>{`${capitalizeAllWords(gender)}'s Fashion`}</Heading>
        <ProductList
          products={products
            .filter(product => product.gender === gender)
            .slice(0, 5)}
        />
      </Section>
    ))
  }
}

export default ProductCategory

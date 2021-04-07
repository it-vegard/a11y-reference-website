import React, { Fragment } from "react"

import {
  getAllGendersForProducts,
  getAllTypesForProducts,
} from "../../util/products-util"
import { capitalizeAllWords } from "../../util/text-util"
import ProductList from "../product-list"
import Heading from "../semantic-heading"
import { Section } from "../semantic-region"
import TEXTS from "../../data/texts"
import { useLanguage } from "../language"
import Link from "../link"
import { createProductUrl } from "../../util/url-util"

import "./product-category.css"

const ProductCategory = ({ products }) => {
  const { language } = useLanguage()
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
        <Heading>
          {TEXTS[language].PRODUCT_FOR_GENDER_HEADING(
            capitalizeAllWords(genders[0])
          )}
        </Heading>
        {types.map(type => (
          <Section className="product-category__section" key={type}>
            <ProductCategory
              products={products.filter(product => product.type === type)}
            />
            <Link url={createProductUrl(language, genders[0], type)}>
              {`${TEXTS[language].BROWSE} ${type.toLowerCase()}`}
            </Link>
          </Section>
        ))}
      </Fragment>
    )
  } else {
    // Front page
    return genders.map(gender => (
      <Section className="product-category__section" key={gender}>
        <Heading>{TEXTS[language].PRODUCT_FOR_GENDER_HEADING(gender)}</Heading>
        <ProductList
          products={products
            .filter(product => product.gender === gender)
            .slice(0, 5)}
        />
        <Link url={createProductUrl(language, gender)}>
          {`${TEXTS[language].SEE_MORE} ${TEXTS[language]
            .PRODUCT_FOR_GENDER_HEADING(gender)
            .toLowerCase()}`}
        </Link>
      </Section>
    ))
  }
}

export default ProductCategory

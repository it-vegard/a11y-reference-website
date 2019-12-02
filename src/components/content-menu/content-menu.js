import React from "react"
import Menu from "../menu"
import { graphql, useStaticQuery } from "gatsby"
import { createProductUrl } from "../../util/url-util"
import { capitalizeAllWords } from "../../util/text-util"
import { useLanguage } from "../language"

const getMenuLinks = (data, language) => {
  const siteMap = data.allProduct.nodes
    .filter(node => node.language === language)
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr.gender]: {
          ...(acc[curr.gender] || {}),
          [curr.type]: {
            title: capitalizeAllWords(curr.type),
            url: createProductUrl(curr.language, curr.gender, curr.type),
          },
        },
      }),
      {}
    )
  return Object.keys(siteMap)
    .map(gender => ({
      title: capitalizeAllWords(gender),
      links: Object.keys(siteMap[gender])
        .map(productType => ({
          title: siteMap[gender][productType].title,
          url: siteMap[gender][productType].url,
        }))
        .sort((productA, productB) =>
          productA.title > productB.title ? 1 : -1
        ),
    }))
    .sort((genderA, genderB) => (genderA.title > genderB.title ? 1 : -1))
}

const ContentMenu = () => {
  const data = useStaticQuery(graphql`
    query ContentMenuQuery {
      allProduct {
        nodes {
          displayName
          id
          imageAlt
          imageName
          language
          price
          type
          gender
          slug
        }
      }
    }
  `)
  const { language } = useLanguage()
  const links = getMenuLinks(data, language)
  return <Menu links={links} />
}

export default ContentMenu

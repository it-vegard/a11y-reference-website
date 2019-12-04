import * as PropTypes from "prop-types"

export const ImagePropType = {
  childImageSharp: PropTypes.shape({
    fixed: PropTypes.shape({
      src: PropTypes.string,
      originalName: PropTypes.string,
    }),
  }),
}

export const ImageQueryPropType = {
  allFile: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape(ImagePropType)),
  }),
}

export const ProductSizesPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    displayName: PropTypes.string,
  })
)

export const ProductPropType = PropTypes.shape({
  campaignPrice: PropTypes.number,
  displayName: PropTypes.string,
  gender: PropTypes.string,
  id: PropTypes.string,
  imageAlt: PropTypes.string,
  imageName: PropTypes.string,
  price: PropTypes.number,
  sizes: ProductSizesPropType,
  slug: PropTypes.string,
  type: PropTypes.string,
})

export const ProductQueryPropType = {
  allProduct: PropTypes.shape({
    nodes: PropTypes.arrayOf(ProductPropType),
  }),
}

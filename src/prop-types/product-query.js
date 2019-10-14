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

export const ProductPropType = {
  displayName: PropTypes.string,
  gender: PropTypes.string,
  id: PropTypes.string,
  imageName: PropTypes.string,
  price: PropTypes.number,
  slug: PropTypes.string,
  type: PropTypes.string,
}

export const ProductQueryPropType = {
  allProduct: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape(ProductPropType)),
  }),
}

import BEACH_VIDEO from "../../videos/Clothes4All-Beach-EN_original.mp4"
import BEACH_VIDEO_CAPTIONS_EN from "file-loader!../../videos/Clothes4All-Beach-EN-captions.vtt"
import BEACH_VIDEO_CAPTIONS_NO from "file-loader!../../videos/Clothes4All-Beach-NO-captions.vtt"

const productVideos = {
  en: {
    "Clothes4All-Beach-EN": {
      url: BEACH_VIDEO,
      captions: BEACH_VIDEO_CAPTIONS_EN,
    },
  },
  no: {
    "Clothes4All-Beach-NO": {
      url: BEACH_VIDEO,
      captions: BEACH_VIDEO_CAPTIONS_NO,
    },
  },
}

export default productVideos

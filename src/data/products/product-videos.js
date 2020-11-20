import React from "react"

import BEACH_VIDEO_EN from "../../videos/Clothes4All-Beach-EN_original.mp4"
import BEACH_VIDEO_NO from "../../videos/Clothes4All-Beach-NO_original.mp4"
import BEACH_VIDEO_CAPTIONS_EN from "file-loader!../../videos/Clothes4All-Beach-EN-captions.vtt"
import BEACH_VIDEO_CAPTIONS_NO from "file-loader!../../videos/Clothes4All-Beach-NO-captions.vtt"

const TextAlternativeForBeachVideoEn = () => (
  <div>
    <p>
      A man walks on the beach with a white suit and brown belt. He is wearing a
      dark-blue shirt under the open suit jacket. There are people and seagulls
      bathing and frolicing on the beach.
    </p>

    <p>
      Be ready for an unforgettable evening at the beach with this linen no fuss
      suit. A Hawaiian shirt made of exotic materials provides an enhanced
      summer feel.
    </p>
  </div>
)

const TextAlternativeForBeachVideoNo = () => (
  <div>
    <p>
      En mann står på stranda i en hvit dress med brunt belte. Under den åpne
      dressjakken har han en mørkeblå skjorte. Det er folk og måker i bakgrunnen
      som bader og leker på stranden.
    </p>
    <p>
      Kombiner en stilig dressjakke til et par linbukser, og ha gjerne en
      Hawaii-skjorte laget av eksotiske materialer under for å gjøre looken klar
      for en sommerfest!
    </p>
  </div>
)

const productVideos = {
  en: {
    beach: {
      url: BEACH_VIDEO_EN,
      captions: BEACH_VIDEO_CAPTIONS_EN,
      textAlternative: TextAlternativeForBeachVideoEn,
    },
  },
  no: {
    beach: {
      url: BEACH_VIDEO_NO,
      captions: BEACH_VIDEO_CAPTIONS_NO,
      textAlternative: TextAlternativeForBeachVideoNo,
    },
  },
}

export default productVideos

import * as React from "react"

export const CCCircle = (props: any) => {
  return (
    <svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...props}>
      <path d="M100 0H0v100h100V0z" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0"
            transform="translate(-.416 -.014) scale(.00671)"
          />
        </pattern>
        <image
          id="image0"
          width={275}
          height={223}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAADfCAMAAADiKsfxAAADAFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8HPQsIAAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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"
        />
      </defs>
    </svg>
  )
}

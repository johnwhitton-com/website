import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type Source = React.SourceHTMLAttributes<HTMLSourceElement>;

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  sources?: Source[];
};

export const ZoomImage = ({ sources = [], ...props }: Props) => {
  const image = (
    <img
      {...props}
      style={{ maxWidth: "100%", height: "auto", ...props.style }}
    />
  );

  return (
    <Zoom>
      {sources.length > 0 ? (
        <picture>
          {sources.map((source) => (
            <source
              key={`${source.type ?? ""}:${source.srcSet ?? ""}`}
              {...source}
            />
          ))}
          {image}
        </picture>
      ) : (
        image
      )}
    </Zoom>
  );
};

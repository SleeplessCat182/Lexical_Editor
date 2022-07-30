import { DecoratorNode } from "lexical";

export class ImageNode extends DecoratorNode {
  __src;
  __altText;
  __width;
  __height;

  static getType() {
    return "image";
  }

  static clone(node) {
    return new ImageNode(
      node.__src,
      node.__altText,
      node.__width,
      node.__height
    );
  }

  constructor(src, altText, width, height, key) {
    super(key);
    this.__src = src;
    this.__altText = altText;
    this.__width = width;
    this.__height = height;
  }

  createDOM(config) {
    const span = document.createElement("span");
    const theme = config.theme;
    const className = theme.image;
    if (className !== "undefined") {
      span.className = className;
    }

    return span;
  }

  updateDOM() {
    return false;
  }

  decorate() {
    return (
      <img
        src={this.__src}
        alt={this.__altText}
        width={this.__width}
        height={this.__height}
      />
    );
  }
}
export function $createImageNode({ src, altText, width, height }) {
  return new ImageNode(src, altText, width, height);
}

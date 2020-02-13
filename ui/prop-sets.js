import {
  borderSet,
  colorSet,
  compose,
  displaySet,
  flexSet,
  globalSet,
  gridSet,
  layoutSet,
  positionSet,
  style,
  textSet,
  transformSet,
  variant,
  verticalAlign,
} from "onno";

export const baseSet = compose({
  name: "base-props",
  renderers: [
    borderSet,
    displaySet,
    flexSet,
    globalSet,
    gridSet,
    layoutSet,
    positionSet,
    textSet,
    transformSet,
    verticalAlign,
  ],
});

const textStyle = variant({
  propsKeys: ["textStyle"],
  themeKeys: ["textStyles"],
  renderers: [baseSet],
});

const borderStyle = variant({
  propsKeys: ["borderStyle"],
  themeKeys: ["borderStyles"],
  renderers: [baseSet],
});

export const divSet = compose({
  name: "div-props",
  renderers: [baseSet, textStyle, borderStyle],
});

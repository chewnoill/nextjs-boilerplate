import { Div, H3, Label } from "ui";

const Swatch = ({ bg, props }) => (
  <Div m={3}>
    <Div bg={bg} s={7} {...props} />
    <Label>{bg}</Label>
  </Div>
);

export default Swatch;

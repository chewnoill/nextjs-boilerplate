import styled from "@emotion/styled";
import { divSet, Flex, Grid } from "ui";

export const Default = styled(props => (
  <Flex w={1} fxd="column">
    <Flex
      fxd="column"
      width={1}
      maxWidth={9}
      textStyle="main"
      alignSelf="center"
      {...props}
    />
  </Flex>
))(divSet);

const Page = {
  Default,
  Grid,
};

export default props => {
  const C = Page[props.type || "Default"];
  return <C {...props} />;
};

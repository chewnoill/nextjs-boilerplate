import styled from "@emotion/styled";
import { divSet } from "./prop-sets";
import { theme } from "ui";

export const Div = styled.div(divSet);

export const Span = styled.span(divSet);

export const Flex = styled(Div)({ display: "flex" });

export const Grid = styled(Div)({ display: "grid" });

export const A = styled.a(divSet, ({ theme }) => ({
  ":visited": {
    color: theme.colors.gray[3],
  },
  ":hover": {
    color: theme.colors.gray[1],
  },
  ":link`": {
    color: theme.colors.gray[2],
  },
}));

export const P = styled.p(divSet);

export const Pre = styled.pre(divSet);

export const H1 = props => <P as="h1" textStyle="h1" {...props} />;
export const H2 = props => <P as="h2" textStyle="h2" {...props} />;
export const H3 = props => <P as="h3" textStyle="h3" {...props} />;
export const H4 = props => <P as="h4" textStyle="h4" {...props} />;

export const Card = props => (
  <Flex fxd="column" m="1" mt="5" p="3" borderStyle="card" {...props} />
);

export const Quote = props => (
  <Div
    marginLeft="4"
    paddingLeft="4"
    borderStyle="quote"
    textStyle="quote"
    {...props}
  />
);

export const Text = props => <Span p="2" textStyle="text" {...props} />;

export const Code = props => <Pre textStyle="code" margin={0} {...props} />;

export const InlineCode = props => (
  <Code d="inline" bg="white" br="2" {...props} />
);

export const Label = props => <H3 textStyle="label" {...props} />;

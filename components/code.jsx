import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { Div, Pre } from "ui";
const Graphviz = dynamic(() => import("./graphviz"), { ssr: false });

const SvgWrapper = styled(Div)({
  "& > polygon": {
    fill: "transparent",
  },
});

const GraphDot = ({ children }) => {
  return (
    <SvgWrapper>
      <Graphviz dot={children} options={{ width: "100%", height: "100%" }} />
    </SvgWrapper>
  );
};

export default ({ className, children }) => {
  switch (className) {
    case "language-dot":
      return <GraphDot>{children}</GraphDot>;
    default:
      return <Pre>{children}</Pre>;
  }
};

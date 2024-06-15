import { unstable_renderSubtreeIntoContainer } from "react-dom";

const BlockQuoteWrapper = ({ children }) => {
  const clonedChildren = React.Children.map(children, (child) => {
    let config = {};
    if (child.type === "p") {
      config = { ...child.props, className: "mt-3" };
    }
    if (child.type === "figcaption") {
      config = { ...child.props, className: "blockquote-footer" };
    }
    return React.cloneElement(child, config);
  });
  return (
    <figure>
      <blockquote>{clonedChildren}</blockquote>
    </figure>
  );
};

export default BlockQuoteWrapper;

import { styled } from "@compiled/react";
import React from "react";

const Wrapper = styled.div`
  margin: ${(props) =>
    props.m != null
      ? typeof props.m === "number"
        ? `${props.m}px`
        : `${props.m}`
      : "0px"};
  marginbottom: ${(props) =>
    props.mb != null
      ? typeof props.mb === "number"
        ? `${props.mb}px`
        : `${props.mb}`
      : "0px"};
  marginleft: ${(props) =>
    props.ml != null
      ? typeof props.ml === "number"
        ? `${props.ml}px`
        : `${props.ml}`
      : "0px"};
  marginright: ${(props) =>
    props.mr != null
      ? typeof props.mr === "number"
        ? `${props.mr}px`
        : `${props.mr}`
      : "0px"};
  margintop: ${(props) =>
    props.mt != null
      ? typeof props.mt === "number"
        ? `${props.mt}px`
        : `${props.mt}`
      : "0px"};
  padding: ${(props) =>
    props.p != null
      ? typeof props.p === "number"
        ? `${props.p}px`
        : `${props.p}`
      : "0px"};
  paddingbottom: ${(props) =>
    props.pb != null
      ? typeof props.pb === "number"
        ? `${props.pb}px`
        : `${props.pb}`
      : "0px"};
  paddingleft: ${(props) =>
    props.pl != null
      ? typeof props.pl === "number"
        ? `${props.pl}px`
        : `${props.pl}`
      : "0px"};
  paddingright: ${(props) =>
    props.pr != null
      ? typeof props.pr === "number"
        ? `${props.pr}px`
        : `${props.pr}`
      : "0px"};
  paddingtop: ${(props) =>
    props.pt != null
      ? typeof props.pt === "number"
        ? `${props.pt}px`
        : `${props.pt}`
      : "0px"};
`;

/** @type {React.FC<{ [K in keyof spacingMap]?: number | string }>} */
export const Spacer = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

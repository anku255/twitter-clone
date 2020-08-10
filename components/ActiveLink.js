import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ children, className, ...props }) => {
  const { asPath } = useRouter();

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const isActive = asPath === props.href || asPath === props.as;

  return (
    <Link {...props}>
      <a className={className || ""}>{children({ isActive })}</a>
    </Link>
  );
};

export default ActiveLink;

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <p>404 - not found</p>
    <Link to="/">back</Link>
  </>
);

export default NotFound;

import React from "react";

import { List } from "../List";

type Props = {
  template: (item: any) => React.ReactElement;
  items: Array<any>;
};

export const DataList: React.FC<Props> = ({ template, items }) => {
  return <List>{items.map(item => React.cloneElement(template(item)))}</List>;
};

import React, { ReactNode } from "react";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";

const AminoListItem = styled.div<any>`
  padding: var(--amino-space-half) var(--amino-space);
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  h5 {
    margin-bottom: 0;
  }

  &:hover {
    background: ${p => (p.onClick ? "var(--amino-hover-color)" : "")};
    cursor: ${p => (p.onClick ? "pointer" : "")};
  }
`;

const Icon = styled.img`
  margin-right: var(--amino-space-half);
  width: 32px;
  height: 32px;
  border-radius: var(--amino-radius);
`;

type Props = {
  label: string;
  subtitle?: string;
  icon?: string;
  rightDecorator?: ReactNode;
  iconComponent?: ReactNode;
  onClick?: any;
};

export const ListItem: React.FC<Props> = ({
  label,
  subtitle,
  icon,
  iconComponent,
  rightDecorator,
  onClick
}) => {
  return (
    <AminoListItem onClick={onClick && onClick}>
      {icon && <Icon src={icon} alt={label} />}
      {iconComponent && !icon && iconComponent}
      <div>
        <Text style={TextStyle.h5}>{label}</Text>
        {subtitle && <Text style={TextStyle.Subtitle}>{subtitle}</Text>}
      </div>
      {rightDecorator && rightDecorator}
    </AminoListItem>
  );
};

import React from "react";
import * as Body from "./Body.styled";
import * as Header from "./Header.styled";
import * as Button from "./Button.styled";
import * as List from "./List.styled";
import * as Other from "./Other.styled";
import { TypographyProps } from "@@types/Typography";

export interface BaseListProps extends TypographyProps.List {
  marks?: boolean;
}

//Body
const TextBody_16 = (props: TypographyProps.Body) => (
  <Body.TextBody_16 {...props} />
);

//Header
const TextH1_96 = (props: TypographyProps.Body) => (
  <Header.TextH1_96 {...props} />
);

const TextH1_64 = (props: TypographyProps.Body) => (
  <Header.TextH1_64 {...props} />
);

const TextH2_24 = (props: TypographyProps.Body) => (
  <Header.TextH2_24 {...props} />
);

const TextH2_24_15 = (props: TypographyProps.Body) => (
    <Header.TextH2_24_15 {...props} />
  );

const TextH3_20 = (props: TypographyProps.Body) => (
  <Header.TextH3_20 {...props} />
);

//Buttons
const TextButton_16 = (props: TypographyProps.Button) => (
  <Button.TextButton_16 {...props} />
);

//List
const TextBullet_20 = (props: TypographyProps.List) => (
  <List.TextBullet_20 {...props} />
);

const TextBullet_16 = (props: BaseListProps) => (
  <List.TextBullet_16 {...props} />
);

//Others
const TextDyanmicColor = (props: TypographyProps.Body) => (
  <Other.TextDyanmicColor {...props} />
);

export const Typography = {
  TextBody_16,
  TextH1_96,
  TextH1_64,
  TextH2_24,
  TextH2_24_15,
  TextH3_20,
  TextButton_16,
  TextBullet_20,
  TextBullet_16,
  TextDyanmicColor,
};

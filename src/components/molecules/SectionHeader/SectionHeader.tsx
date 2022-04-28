import { Typography } from "@atoms/Typography/Typography";
import { SectionHeaderWrapper } from "./SectionHeader.styled";

type SectionHeaderProps = {
  children: string;
};

export const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <SectionHeaderWrapper>
      <Typography.TextH2_24_15>{children}</Typography.TextH2_24_15>
    </SectionHeaderWrapper>
  );
};

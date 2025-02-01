import { Meta, StoryFn } from "@storybook/react";
import { Title } from "./title";
import { EAlignVariants, ETitleVariants } from "./types";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    variant: {
      control: "radio",
      options: [
        ETitleVariants.H1,
        ETitleVariants.H2,
        ETitleVariants.H3,
        ETitleVariants.H4,
        ETitleVariants.H5,
        ETitleVariants.H6,
      ] as Array<ETitleVariants>,
    },
    align: {
      control: "radio",
      options: [
        EAlignVariants.LEFT,
        EAlignVariants.CENTER,
        EAlignVariants.RIGHT,
      ] as Array<EAlignVariants>,
    },
  },
} as Meta<typeof Title>;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  text: "Heading 1",
  variant: ETitleVariants.H1,
};

export const Heading2 = Template.bind({});
Heading2.args = {
  text: "Heading 2",
  variant: ETitleVariants.H2,
};

export const CenteredTitle = Template.bind({});
CenteredTitle.args = {
  text: "Centered Title",
  variant: ETitleVariants.H3,
  align: EAlignVariants.CENTER,
};

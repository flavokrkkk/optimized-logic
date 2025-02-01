import { Meta, StoryFn } from "@storybook/react";
import { Loader } from "./loading";
import { ELoadingSizes } from "./types";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: ELoadingSizes.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  size: ELoadingSizes.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  size: ELoadingSizes.LARGE,
};

import { Meta, StoryFn } from "@storybook/react";
import Counter from "./counter";
import { ECounterVariants } from "./types";

export default {
  title: "Components/Counter",
  component: Counter,
  argTypes: {
    style: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    size: {
      control: "radio",
      options: [8, 12, 16, 20, 24],
    },
    stroke: { control: "boolean" },
    quantity: { control: "text" },
    pulse: { control: "boolean" },
  },
} as Meta<typeof Counter>;

const Template: StoryFn<typeof Counter> = (args) => <Counter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: ECounterVariants.PRIMARY,
  size: 16,
  stroke: true,
  quantity: 56,
  pulse: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  style: ECounterVariants.SECONDARY,
  size: 12,
  stroke: false,
  quantity: 99,
  pulse: true,
};

export const Large = Template.bind({});
Large.args = {
  style: ECounterVariants.PRIMARY,
  size: 24,
  stroke: true,
  quantity: "Long Text",
  pulse: true,
};

export const NoPulse = Template.bind({});
NoPulse.args = {
  style: ECounterVariants.SECONDARY,
  size: 8,
  stroke: false,
  quantity: 12,
  pulse: false,
};

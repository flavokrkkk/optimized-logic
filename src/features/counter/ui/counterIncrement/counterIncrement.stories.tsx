import { Meta, StoryFn } from "@storybook/react";
import { EButtonSizes } from "@/shared";
import CounterIncrement from "./counterIncrement";

export default {
  title: "Components/CounterIncrement",
  component: CounterIncrement,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof CounterIncrement>;

const Template: StoryFn<typeof CounterIncrement> = () => <CounterIncrement />;

export const Small = Template.bind({});
Small.args = {
  size: EButtonSizes.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  size: EButtonSizes.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  size: EButtonSizes.LARGE,
};

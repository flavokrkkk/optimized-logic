import { Meta, StoryFn } from "@storybook/react";
import { EButtonSizes } from "@/shared";
import CounterDecrement from "./counterDecrement";

export default {
  title: "Components/CounterDecrement",
  component: CounterDecrement,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof CounterDecrement>;

const Template: StoryFn<typeof CounterDecrement> = () => <CounterDecrement />;

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

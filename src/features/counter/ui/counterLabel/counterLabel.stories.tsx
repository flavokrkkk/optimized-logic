import { Meta, StoryFn } from "@storybook/react";
import { Button, EButtonSizes } from "@/shared";
import CounterLabel from "./counterLabel";
import { useCounter } from "../../hooks/useCounter";

export default {
  title: "Components/CounterLabel",
  component: CounterLabel,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: "radio",
      options: [EButtonSizes.SMALL, EButtonSizes.MEDIUM, EButtonSizes.LARGE],
    },
  },
} as Meta<typeof CounterLabel>;

const Template: StoryFn<typeof CounterLabel> = () => {
  const { counter } = useCounter();
  return (
    <Button label="Counter" size={EButtonSizes.MEDIUM} counter={counter} />
  );
};

export const Default = Template.bind({});
Default.args = {
  size: EButtonSizes.MEDIUM,
};

export const Small = Template.bind({});
Small.args = {
  size: EButtonSizes.SMALL,
};

export const Large = Template.bind({});
Large.args = {
  size: EButtonSizes.LARGE,
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  size: EButtonSizes.MEDIUM,
};

import { Meta, StoryFn } from "@storybook/react";
import { EButtonSizes, EButtonVariants } from "./types";
import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: [
        EButtonVariants.PRIMARY,
        EButtonVariants.SECONDARY,
      ] as Array<EButtonVariants>,
    },
    size: {
      control: "radio",
      options: [
        EButtonSizes.SMALL,
        EButtonSizes.MEDIUM,
        EButtonSizes.LARGE,
      ] as Array<EButtonSizes>,
    },
    state: {
      control: "radio",
      options: ["pressed", "enabled", "loading", "disabled"],
    },
    focused: { control: "boolean" },
    counter: { control: "number" },
    onClick: { action: "clicked" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: EButtonVariants.PRIMARY,
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Loading Button",
  state: "loading",
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  label: "Button with Counter",
  counter: 5,
};

export const Focused = Template.bind({});
Focused.args = {
  label: "Focused Button",
  focused: true,
};

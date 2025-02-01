import { Meta, StoryFn } from "@storybook/react";
import "../../styles/counter.styl";
import CounterControl from "./counterControl";

export default {
  title: "Components/CounterControl",
  component: CounterControl,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof CounterControl>;

const Template: StoryFn<typeof CounterControl> = () => <CounterControl />;

export const Default = Template.bind({});
Default.args = {};

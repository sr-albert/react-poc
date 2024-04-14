// Generate Storybook documentation for the DatePicker component
//
// Path: src/components/date-picker/DatePicker.stories.js

import React from "react";
import CustomDatePicker from "./react-datepicker";
import { action } from "@storybook/addon-actions";
import { fn } from "@storybook/test";

export default {
  title: "Date Time Picker",
  component: CustomDatePicker,
  args: { onClick: fn() },
  parameters: {
    layout: "centered",
  },
};

export const DatePicker = (args) => {
  return (
    <CustomDatePicker
      selected={new Date()}
      onChange={action("Date selected")}
    />
  );
};

export const ReactDatePicker = () => (
  <CustomDatePicker selected={new Date()} onChange={action("Date selected")} />
);

export const AntdDatePicker = () => (
  <CustomDatePicker selected={new Date()} onChange={action("Date selected")} />
);

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

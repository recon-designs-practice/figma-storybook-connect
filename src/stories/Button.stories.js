import { Button } from '../components/button'

export default {
  title: 'Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  label: 'Primary button',
  buttonType: 'primary',
  onclick: () => alert('Primary button clicked')
}

PrimaryButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/proto/NVYR5zWuWM4Y0yRdwOSOIn/zero-height-test?page-id=0%3A1&node-id=119%3A10&viewport=1467%2C-2766%2C0.73&scaling=min-zoom&starting-point-node-id=119%3A10"
  },
};

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  label: 'Secondary button',
  buttonType: 'secondary',
  onclick: () => alert('Secondary button clicked')
}

SecondaryButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/proto/NVYR5zWuWM4Y0yRdwOSOIn/zero-height-test?page-id=0%3A1&node-id=119%3A24&viewport=1315%2C-2425%2C0.57&scaling=min-zoom&starting-point-node-id=119%3A24&show-proto-sidebar=1"
  }
}

export const TextButton = Template.bind({})
TextButton.args = {
  label: 'Text button',
  buttonType: 'text',
  onclick: () => alert('Text button clicked')
}

TextButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/proto/NVYR5zWuWM4Y0yRdwOSOIn/zero-height-test?page-id=0%3A1&node-id=119%3A39&viewport=1315%2C-2425%2C0.57&scaling=min-zoom&starting-point-node-id=119%3A39"
  }
}
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

// PrimaryButton.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/NVYR5zWuWM4Y0yRdwOSOIn/zero-height-test?node-id=37%3A48",
//   },
// };

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  label: 'Secondary button',
  buttonType: 'secondary',
  onclick: () => alert('Secondary button clicked')
}

export const TextButton = Template.bind({})
TextButton.args = {
  label: 'Text button',
  buttonType: 'text',
  onclick: () => alert('Text button clicked')
}
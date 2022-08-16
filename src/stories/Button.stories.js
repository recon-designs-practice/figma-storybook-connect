import { Button } from '../components/button'

export default {
    title: 'Button',
    component: Button
}

const Template = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    label: 'Send now'
}

PrimaryButton.parameters = {
    design: {
        type: "figma",
    //   url: "https://www.figma.com/file/NVYR5zWuWM4Y0yRdwOSOIn/zero-height-test?node-id=37%3A48",
        // url: "https://www.figma.com/proto/NVYR5zWuWM4Y0yRdwOSOIn/zero-height-test?page-id=0%3A1&node-id=93%3A121&viewport=2400%2C-3345%2C0.94&scaling=min-zoom&starting-point-node-id=93%3A121&show-proto-sidebar=1",
        url: "https://www.figma.com/proto/NVYR5zWuWM4Y0yRdwOSOIn/zero-height-test?page-id=0%3A1&node-id=93%3A124&viewport=1424%2C-2257%2C0.66&scaling=min-zoom&starting-point-node-id=93%3A124&show-proto-sidebar=1"
    },
  };
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


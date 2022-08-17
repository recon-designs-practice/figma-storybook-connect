import { Input } from '../components/input'

export default {
    title: 'Input',
    component: Input
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
    placeholder: 'A placeholder'
}

export const WithHelperText = Template.bind({})
WithHelperText.args = {
    placeholder: 'With helper'
}
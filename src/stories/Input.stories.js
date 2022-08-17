import { Input } from '../components/input'

export default {
    title: 'Input',
    component: Input
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
    placeholder: null,
    label: 'Label',
    helperText: null
}

export const Placeholder = Template.bind({})
Placeholder.args = {
    placeholder: 'Placeholder',
    label: 'Label',
    helperText: null
}

export const HelperText = Template.bind({})
HelperText.args = {
    placeholder: null,
    label: 'Label',
    helperText: 'Helper text'
}
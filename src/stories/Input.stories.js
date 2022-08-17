import { Input } from '../components/input'

export default {
    title: 'Input',
    component: Input
}

const Template = (args) => <Input {...args} />

export const InputComponent = Template.bind({})
InputComponent.args = {
    placeholder: 'A placeholder'
}
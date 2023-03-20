import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select, SelectPropsType} from './Select';
import {Story} from '@storybook/react';

const GetCategoryObj = (categoryName: string) => ({
    table: {category: categoryName}
})
export default {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        onChange: {
            ...GetCategoryObj('events')
        }
    }
}

const items = [
    {id: 1, name: 'Artem'},
    {id: 2, name: 'Pavel'},
    {id: 3, name: 'Denis'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Nikolay'},
]

const onClickCallBack = action('Some item was clicked')
const Template: Story<SelectPropsType> = args => <Select {...args} />;

const callBackProps = {
    onClick: onClickCallBack,
    items: items,
    //etc. for destructing props
}

export const BaseSelectModeChanging: Story<SelectPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [value, setValue] = useState<string>(items[0].name)
    return (
        <Select {...args}
                value={value}
                setValue={setValue}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
        />
    )
};
BaseSelectModeChanging.args = {
    ...callBackProps,
}

export const SelectCollapsedMode = Template.bind({});
SelectCollapsedMode.args = {
    ...callBackProps,
    value: items[0].name,
    collapsed: false,
}

export const SelectUnCollapsedMode = Template.bind({});
SelectUnCollapsedMode.args = {
    ...callBackProps,
    value: items[0].name,
    collapsed: true,
}




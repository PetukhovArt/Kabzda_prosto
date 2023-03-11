import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccPropsType} from './Accordion';

const GetCategoryObj=(categoryName: string)=> ({
    table: {category: categoryName}
})

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('colors')
        },
        onChange: {
            ...GetCategoryObj('events')
        }
    }
}

const callBack = action('accordion mode change event fired')
const Template: Story<AccPropsType> = args => <Accordion {...args} />;
const callBackProps = {
    /**
     * Callback that is called when Menu is clicked
     */
    onChange: callBack,
    //etc. for destructing props on body
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callBackProps,
    title: 'Menu',
    collapsed: true,
}

export const MenuUnCollapsedMode = Template.bind({});
MenuUnCollapsedMode.args = {
    ...callBackProps,
    title: 'Users',
    collapsed: false,
}

export const ModeChanging: Story<AccPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    title: 'Users',
}


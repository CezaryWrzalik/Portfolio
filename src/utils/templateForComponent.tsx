import { FunctionComponent } from 'react';
import { Parameters, Story } from '@storybook/react';

export const templateForComponent = <P,>(Component: FunctionComponent<P>) => (
    props: Partial<P>,
    parameters?: Parameters,
): Story<P> => {
    const template: Story<P> = (args) => {
        return <Component {...args} />;
    };
    const story = template.bind({});

    story.args = props;
    story.parameters = parameters;

    return story;
};

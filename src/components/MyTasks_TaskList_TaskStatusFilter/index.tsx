import React  from 'react';
import ViewTemplateComponent, { ViewTemplateComponentProps, ViewTemplateComponentLabels } from "./view";
import ViewModelComponent, { ViewModelComponentProps } from "./model";

export declare type ComponentProps = Omit<ViewModelComponentProps, 'children'>;
export declare type ComponentLabels = ViewTemplateComponentLabels;
// export declare type ComponentThemeColors = ViewTemplateComponentThemeColors;

export default function IndexComponent(props: ComponentProps): JSX.Element {
return (
    <ViewModelComponent {...props}>
        {(viewProps: ViewTemplateComponentProps) => <ViewTemplateComponent {...viewProps} />}
    </ViewModelComponent>
);
}

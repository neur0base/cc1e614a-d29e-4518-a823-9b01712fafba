export declare type RoutingConfig = {
    id: string,
    name: string,
    device: "web" | "native" | "both",
}

export declare type RouteConfig = {
    id: string;
    title: string;
    icon?: Icon;
    
    component: ScreenComponent;
    attributes?: Record<string, unknown>;
    
    needLogin?: boolean;
    stacks?: RouteConfig[];

    native?: {
        header?: HeaderConfig | boolean;
        toolbar?: boolean;
    }
    web?: {
        url: string;
        header?: HeaderConfig | boolean;
    }
};

export declare type ScreenComponent = (attributes, routeId) => JSX.Element;

export declare type HeaderConfig = {
    centerMode?: number;
    theme?: string;

    title?: string;
    logo?: Image;

    native?: {
        leftMenu?: MenuItemConfig;
        rightMenu?: MenuItemConfig;
        // renderRightMenu?: (props: THeaderScreenProps) => JSX.Element;
        // renderLeftMenu?: (props: THeaderScreenProps) => JSX.Element;
    },
    web?: {
        menu?: MenuItemConfig[];
    }
};

export declare type MenuItemConfig = {
    title?: string;
    icon?: Icon;
    routeId: string;
    onClick?: (current: RouteConfig) => void;
    attributes?: Record<string, any>;
};




export declare type AppConfig = {
    name: string;
    logo?: Image;
    login?: LoginConfig | null;
    menuSections?: MenuSectionConfig[];
};

export declare type LoginConfig = {
    memberInstanceId: string | string[];
    afterLoginRouteId: string;
    loginRouteId: string;
};

export declare type MenuSectionConfig = {
    name: string;
    items: MenuItemConfig[];
};



// ----------------- Common Types -----------------

export declare type Image = {
    url: string;
};

export declare type Icon = {
    name: string,
    color?: string,
    onClick?: () => void
}

export declare type RoutingConfig = {
    id: string,
    name: string,
    device: Device,
}

export enum Device {
    WebApp = "web",
    NativeApp = "native",
}
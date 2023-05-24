import { Device, RoutingConfig } from "./types";

const routing: RoutingConfig[] = [
    {
        id: 'default_web_routing',
        name: "Default Web Routing",
        device: Device.WebApp,
    }
];

export default routing;
import { AppConfig } from "../types";

const appConfig: AppConfig = {
    name: "Jenio Temp App",
    logo: {
        url: "https://www.jenio.co/wp-content/uploads/2020/08/jenio-logo.png",
    },
    login: {
        memberInstanceId: "members",
        afterLoginRouteId: "home",
        loginRouteId: "login",
    },
    menuSections: [
        {
            name: "Main",
            items: [
                {
                    title: "Home",
                    routeId: "home",
                },
            ]
        }
    ]
};

export default appConfig;
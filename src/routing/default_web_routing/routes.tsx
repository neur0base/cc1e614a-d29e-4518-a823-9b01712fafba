import React from 'react';
import { RouteConfig } from "../types";
import HomeScreen from '@/src/screens/HomeScreen';

const screens: RouteConfig[] = [
    {
        id: "home",
        title: "Home",
        icon: {
            name: "home",
        },
        component: HomeScreen,
        attributes: {
            refid: "aaa",
        },
        web: {
            url: "/",
        },  
    }
];

export default screens;
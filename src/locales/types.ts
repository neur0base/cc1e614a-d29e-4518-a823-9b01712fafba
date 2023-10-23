import { LocaleConfig as LocaleConfigAppSDK } from '@neur0base/app-sdk-core';

export declare type LocaleConfig = LocaleConfigAppSDK & {
   isPrimary: boolean;
   type: "Custom" | "Translate";
}

export declare type LocalesConfig = {
   [localeType: string]: LocaleConfig;
}

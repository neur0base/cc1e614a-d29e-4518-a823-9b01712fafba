// @ts-nocheck
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { DynamicLayoutBuilder, Member, useUser, useEPANavigation, useLayout } from '@neur0base/app-sdk';
import { initialize } from '@echopf/sdk';
import {Platform} from "react-native";
import { MODEL_SCHEMAS } from '@echopf/frontend-model';

import './web/index.css';
import './web/app.css';
import languages from '@/src/languages';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import ionIconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import { TScreenConfig } from '@neur0base/app-sdk/lib/typescript/src/layout/LayoutType';
const iconFontStyles = Platform.OS === 'web' ? `@font-face {
  src: url(${iconFont});
  font-family: MaterialIcons;
}
@font-face {
  src: url(${ionIconFont});
  font-family: Ionicons;
}` : `@font-face {
  src: url(${iconFont});
  font-family: MaterialIcons;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

const defaultLayoutConfigNeedLogin: any = {
  login: {
    needLogin: false,
    memberInstanceId: ['members'],
    allowSignUp: false,
    afterLogin: '/',
    loginRouteName: '/login',
  },
  sidemenu: {
    title: 'メインメニュー',
    logoURL: '',
    sections: [
      {
        title: 'メニュー',
        position: 'left1',
      },
    ],
    items: [
      /*
      {
        icon: { role: 'home', type: 'epf' },
        label: 'ログアウト',
        routeURL: '/logout',
        position: 'left3',
      },
      */
    ],
  },

  header: {
    webMenu: [],
    menu: [
      {
        label: 'Language',
        onClick: () => null,
        items: [
          { label: 'English', onClick: () => i18n.changeLanguage('en-US') },
          { label: 'Japan', onClick: () => i18n.changeLanguage('ja-JP') },
        ],
      },
    ],

  },
};

const accountTable = {
  'localhost' : {
    domain: 'cucom2.echopf.com',
    appId: '37dd3d5a7811dc22157151067d0cd375',
    appKey: 'e7bb76effcb258f98db2d1d48a84bcac',
    appName: 'Cucom Sample App',
    logo: 'https://cucom.app/img/logo.png',
    logoBGW: 'https://cucom.app/img/logo.png',
  },
};

const hostname = window?.location?.hostname || "";
const accountData = accountTable[hostname] || {};
const client: any = initialize(
  accountData?.domain,
  accountData?.appId,
  accountData?.appKey,
);
const commonConfig = {
  appName: accountData?.appName,
  logo: accountData?.logo,
  layoutType: 'default',
};

const LoginScreenTemplate = (props, isAdmin=false) => {
  const [ data ] =  useLayout();
  const appName = data?.appConfig?.common?.appName || '';
  const defaultLogo = data?.appConfig?.common?.logo || null;
  const logo = accountData?.logoBGW || defaultLogo;
  return (
    <div>
        <div className={'main-container'}>
            <div className={'login-page'}>
                {Member.view.MemberLoginView(props, {}, {})}
            </div>
        </div>
    </div>
  );
};




export function tmpConvertInstance(instance: TInstance): any {
  return {
    id: instance.instanceId,
    type: instance.pluginType,
    models: Object.keys(instance.models).map((type) => {
      return {
        type,
        fields: instance.models[type].fields,
        formatter: instance.models[type].formatter,
      };
    }),
  };
}
const MemberInstancePointerFormatter = {
  rich: (member: MemberRawData) => <>{getMemberNameWithCompanyName(member)}</>,
  text: (member: MemberRawData) => getMemberNameWithCompanyName(member) || '',
};
const GroupInstancePointerFormatter = {
  rich: (group: ModelResultState<GroupJS>) => <>{group.data.name}</>,
  text: (group: ModelResultState<GroupJS>) => group.data.name || '',
};
const instances: TInstancesConfig = {
  members: {
    instanceId: 'members',
    pluginType: 'Member',
    models: {
      member: {
        fields: (MODEL_SCHEMAS.member as TInstanceField<unknown>[]).concat([
          {
            fieldId: 'contents.status',
            dataType: 'string',
            inputType: 'text',
            isArray: false,
            languages: {
              'en-US': 'status',
              'ja-JP': 'status',
            },
            isRange: false,
          },
          {
            fieldId: 'contents.type',
            dataType: 'string',
            inputType: 'text',
            isArray: false,
            languages: {
              'en-US': 'type',
              'ja-JP': 'type',
            },
            isRange: false,
          },
          {
            fieldId: 'contents.name',
            dataType: 'string',
            inputType: 'text',
            isArray: false,
            languages: {
              'en-US': 'name',
              'ja-JP': 'name',
            },
            isRange: false,
          },
          {
            fieldId: 'contents.email',
            dataType: 'string',
            inputType: 'text',
            isArray: false,
            languages: {
              'en-US': 'email',
              'ja-JP': 'email',
            },
            isRange: false,
          },
          {
            fieldId: 'contents.phone_no',
            dataType: 'string',
            inputType: 'text',
            isArray: false,
            languages: {
              'en-US': 'phone_no',
              'ja-JP': 'phone_no',
            },
            isRange: false,
          },
          {
            fieldId: 'contents.image',
            dataType: 'file',
            inputType: 'text',
            isArray: false,
            languages: {
              'en-US': 'image',
              'ja-JP': 'image',
            },
            isRange: false,
          },
          {
            fieldId: 'contents.favorite_products',
            dataType: 'string',
            inputType: 'text',
            isArray: true,
            languages: {
              'en-US': 'favorite_products',
              'ja-JP': 'favorite_products',
            },
            isRange: false,
          },
        ]),
        formatter: MemberInstancePointerFormatter,
      },
      group: {
        fields:
          /*(MODEL_SCHEMAS["group"] as TInstanceField<unknown>[]).concat(*/ [] /*)*/,
        formatter: GroupInstancePointerFormatter,
      },
    },
  },
};

const screens: TScreenConfig[] = [
  {
    id: '/login',
    needLogin: false,
    icon: { role: 'header' },
    label: 'ログイン',
    component: (routeName, attributes) => {
      return (<Member.viewModels.MemberLogin instance={tmpConvertInstance(instances.members)}>
        {(props) => LoginScreenTemplate(props, false)}
      </Member.viewModels.MemberLogin>);
    },
    header: false,
  },
];


const App = () => {
  return (
    <DynamicLayoutBuilder
      instances={[]}
      client={client}
      common={commonConfig}
      layout={{
        default: defaultLayoutConfigNeedLogin,
      }}
      languages={languages}
      screens={screens}
      defaultLanguage="ja-JP"
      theme={{}}
      extendLanguage={{
        'ja-JP': {
          Plugin: {
            Member: {
              MemberLogin: {
                LoginId: 'user_name',
              },
            },
          },
        },
      }}
    />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

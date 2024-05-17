import { StyleSheet } from 'react-native';
import { flattenRoutes, isPublicRoute, useAppContext, useAuthContext, useUIContext, MenuItemConfig, MenuSectionConfig } from '@jenify_ai/app-sdk-core';
import { useRouter } from '@jenify_ai/app-sdk-router';
import { Icon } from '@jenify_ai/app-sdk-ui';
import { useEffect } from 'react';

export default function DefaultLayoutComponent({ children }: { children: React.ReactNode }): JSX.Element {
    const [ , { navigate } ] = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { getThemeColor } = useUIContext<never, any>(["LayoutRouteComponent"]);
    const [ { config, routes } ] = useAppContext();
    const { isLoggedIn } = useAuthContext();
    const routesFlattened = flattenRoutes(routes || []);
  
    useEffect(() => {
        if (config?.name) document.title = config?.name;
    }, [ config ]);
  
    const styles = StyleSheet.create({
        wrapper: {
            backgroundColor: getThemeColor("backgroundColor"),
            color: getThemeColor("textColor"),
        },
        main: {
            backgroundColor: getThemeColor("backgroundColor"),
            color: getThemeColor("textColor"),
        },
        aside: {
            backgroundColor: getThemeColor("sideMenuBackgroundColor", "backgroundColor"),
            color: getThemeColor("sideMenuTextColor", "textColor"),
        },
        menuButtonText: {
            color: getThemeColor("sideMenuLinkColor", "linkColor"),
        }
    });

    return (
        <div className="flex" style={styles.wrapper}>
            <aside className={`sticky top-0 h-screen w-56 p-4`} style={styles.aside}>
                <div className="flex items-center mb-4 space-x-1">
                    <h1 className="text-lg font-medium">
                        {config?.logo?.url ? (
                            <img src={config?.logo?.url} alt={config?.name} className="w-24 h-24 rounded-full mx-auto" />
                        ) : (
                            <>{config?.name}</>
                        )}
                    </h1>
                </div>
                <nav className="space-y-2">
                    <nav>
                    {(config?.menuSections||[]).map((menuSection: MenuSectionConfig, key: number) => (
                        <div key={key}>
                            {(menuSection?.items||[]).map((menuItem: MenuItemConfig) => {
                                
                                const url = routesFlattened?.find((route) => route.id === menuItem?.routeID)?.web?.url || "";
                                if (url.includes(":")) return null;
                                
                                if (!isLoggedIn && !isPublicRoute(routes, config, menuItem?.routeID)) return null;
                                return (<button 
                                    className={`w-full flex items-center space-x-2 py-2 px-2 rounded-lg`}
                                    key={menuItem?.routeID}
                                    onClick={() => navigate(menuItem?.routeID)}>
                                    {menuItem?.icon && (<Icon name={menuItem?.icon} />)}
                                    <span className="text-sm font-medium" style={styles.menuButtonText}>
                                      {menuItem?.title}
                                    </span>
                                </button>);
                            })}
                        </div>
                    )).filter((item) => item)}
                    </nav>
                </nav>
            </aside>
            <main className="flex-grow p-6" style={styles.main}>
              {children}
            </main>
        </div>
    );
}
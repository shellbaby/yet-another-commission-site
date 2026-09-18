import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./components/ui/navigation-menu.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div className="mx-auto h-dvh max-w-3xl">
            {/* <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink>test</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu> */}
            <App />
        </div>
    </StrictMode>,
);

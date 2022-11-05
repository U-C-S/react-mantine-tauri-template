import type { AppProps } from "next/app";

import "../style.css";
import "../App.css";
import { useEffect } from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("@tauri-apps/api/window").then((tauri) => {
      tauri.appWindow.setDecorations(true);
    });
  });
  return <Component {...pageProps} />;
}

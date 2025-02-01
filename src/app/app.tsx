import { lazy } from "react";

const CounterPage = lazy(() => import("@pages/counterPage"));

export const App = () => <CounterPage />;

export interface RoutesType {
    path: string;
    exact: boolean;
    name: string;
    element: React.LazyExoticComponent<() => JSX.Element>;
}
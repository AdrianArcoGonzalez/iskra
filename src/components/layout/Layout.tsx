import classes from "../Layout/Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div data-testid="layout">
      <main className={classes.main}>{children}</main>
    </div>
  );
}

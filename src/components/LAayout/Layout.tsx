import classes from "../Layout/Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <main className={classes.main}>{children}</main>;
}

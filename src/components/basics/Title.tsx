import styles from "@/components/title.module.css"
import { CSSProperties } from "react";

interface TitleProps {
  title: string;
  subtitle: string;
  right?: boolean;
}

export default function Title({title, subtitle, right}: TitleProps) {
  const style: CSSProperties = {
    backgroundColor: "yellow",
    textAlign: right ? "right" : "left",
  }

  return (
    <>
      <h1 className={styles.red}>{title}</h1>
      <h2 className={styles.blue} style={style}>{subtitle}</h2>
    </>
  )
}


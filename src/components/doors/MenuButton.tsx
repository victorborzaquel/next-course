interface MenuButtonProps {
  children?: React.ReactNode;
  color?: string;
  size?: number;
}

export default function MenuButton({children, color, size = 200}: MenuButtonProps) {
  return (
    <div style={{
      display: "flex",
      padding: size / 10,
      backgroundColor: color || "#ffffff",
    }}>
      {children}
    </div>
  );
}
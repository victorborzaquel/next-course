interface ListProps {
  children: React.ReactNode;
}

export default function List({children}: ListProps) {
  return (
    <ul>
      {children}
    </ul>
  )
}
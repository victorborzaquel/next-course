interface ItemProps {
  title: string;
}

export default function Item({title}: ItemProps) {
  return (
    <li>{title}</li>
  )
}
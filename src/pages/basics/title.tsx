import Title from "@/components/Title";

export default function title() {
  return (
    <div style={{width: 500}}>
      <h1>Page</h1>
      <Title title="title" subtitle="Subtitle"/>
      <Title title="title" subtitle="Subtitle" right/>
    </div>
  )
}
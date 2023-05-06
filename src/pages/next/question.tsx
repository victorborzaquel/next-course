import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Question {
  id: number;
  name: string;
}
export default function question() {
  const [question, setQuestion] = useState(null as Question | null)

  useEffect(() => {
    fetch('/api/question?id=1')
      .then(res => res.json())
      .then(setQuestion)
  
    return () => {
      
    }
  }, [])
  

  return (
    <div>
      <h1>Question</h1>
      <div>
        <h2>{question?.name}</h2>
        <ul>
          {question &&<Questions name={question.name}/>}
        </ul>
      </div>
    </div>
  )
}

function Questions({name}: {name: string}) {
  return (
    <li>{name}</li>
  )
}

import React from 'react'
import Tabs from './Tabs';

type TabData = {
  title: string,
  content: React.ReactNode
}

const data: TabData[] = [
  {
    title: "HTML",
    content: <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>,
  },
  {
    title: "CSS",
    content: <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.</p>,
  },
  {
    title: "JavaScript",
    content: <p>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.</p>,
  },
];


interface IndexProps {

}

const Index: React.FC<IndexProps> = ({ }) => {
  return (
    <>
      <Tabs tabs={data} />
    </>
  );
}

export default Index;
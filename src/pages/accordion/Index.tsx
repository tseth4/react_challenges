import React from 'react'
import { Accordion } from './Accordion';

interface IndexProps {

}

export type AccordionItem = {
  title: string;
  content: string;
}

const dummyData: AccordionItem[] = [
  {
    title: 'HTML',
    content: 'The HyperText Markup Language or HTML is the  standard markup language for documents designed to be displayed in a web browser.'
  },
  {
    title: 'CSS',
    content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
  },
  {
    title: 'JavaScript',
    content: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
  }

]

const Index: React.FC<IndexProps> = ({ }) => {
  return (
    <>
      <Accordion accordionData={dummyData} />
    </>
  );
}

export default Index;
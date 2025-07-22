import React from 'react'
import styles from './Accordion.module.scss';
import AccordionElement from './AccordionElement';
import type { AccordionItem } from './Index';

interface AccordionProps {
  accordionData: AccordionItem[]
}

export const Accordion: React.FC<AccordionProps> = ({ accordionData }) => {

  return (
    <div className={styles.accordion}>
      {accordionData.map((item, index) => (
        <div key={index} >
          <AccordionElement item={item} />
        </div>
      ))}
    </div>
  );
}
import React from 'react'
import styles from './Accordion.module.scss';
import AccordionElement from './AccordionElement';
import type { AccordionItem } from './Index';
import { useRenderCount } from '../../hooks/useRenderCount';

interface AccordionProps {
  accordionData: AccordionItem[]
}

export const Accordion: React.FC<AccordionProps> = ({ accordionData }) => {
  useRenderCount("accordion")
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
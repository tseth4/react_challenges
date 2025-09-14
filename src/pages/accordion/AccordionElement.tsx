import React, { useState } from 'react'
import styles from './Accordion.module.scss'
import clsx from 'clsx';
import type { AccordionItem } from './Index';
import { useRenderCount } from '../../hooks/useRenderCount';

interface AccordionElementProps {
  item: AccordionItem
}

const AccordionElement: React.FC<AccordionElementProps> = ({ item }) => {
  useRenderCount("accordion element: " + item.title)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div className={styles.accordion__title} onClick={() => setIsOpen(prev => !prev)}>
          {`${item.title} `}
          <span

            aria-hidden={true}
            className={styles.accordion__icon}
          />
        </div>
        <div className={clsx(
          styles['accordion__content'],
          isOpen
            ? styles['accordion__content--active']
            : styles['accordion__content--inactive']
        )}
        >
          {item.content}
        </div>
      </div >
    </>
  );
}

export default AccordionElement;
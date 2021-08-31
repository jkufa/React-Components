import React, { FC } from "react";
import styles from './GridRuler.module.scss';
import cn from 'classnames';

type Spacing = 'sm' | 'md' | 'lg';


const GridRuler: FC<{ spacing?: Spacing }> = ({ spacing }) => {
  const classNames = cn(
    styles.gridRuler,
    { [styles[`gridRuler_spacing_${spacing}`]]: spacing,
  });
  return (
    <div className={classNames}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
          <div className={styles.gridRuler_item} key={number}/>
        ))}
    </div>

  );
}

export default GridRuler;
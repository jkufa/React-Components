import React, { FC,ReactNode, } from "react";
import styles from "./Grid.module.scss";
import cn from "classnames";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";
type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";
type AlignItems = "flex-start" | "center" | "flex-end";

interface gridProps {
  children: ReactNode,
  container?: boolean,
  item?: boolean,
  xs?: Cols,
  sm?: Cols,
  md?: Cols,
  lg?: Cols,
  spacing?: Spacing,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems,
}

const Grid:FC<gridProps & React.HTMLAttributes<HTMLDivElement>> = (gridProps,...props) => {
  const classNames = cn({
    [styles.grid_container]: gridProps.container,
    [styles.grid_item]: gridProps.item,
    [styles[`grid_xs_${gridProps.xs}`]]: gridProps.xs,
    [styles[`grid_sm_${gridProps.sm}`]]: gridProps.sm,
    [styles[`grid_md_${gridProps.md}`]]: gridProps.md,
    [styles[`grid_lg_${gridProps.lg}`]]: gridProps.lg,
    [styles[`grid_spacing_${gridProps.spacing}`]]: gridProps.spacing,
    [styles[`grid_justifyContent_${gridProps.justifyContent}`]]: gridProps.justifyContent,
    [styles[`grid_alignItems_${gridProps.alignItems}`]]: gridProps.alignItems,
  });

  return (
  <div className={classNames} {...props}>
    {gridProps.children}
  </div>
  );
}

export default Grid;

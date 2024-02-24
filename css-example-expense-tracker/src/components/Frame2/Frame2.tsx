import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2312:11 */
export const Frame2: FC<Props> = memo(function Frame2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1}>
        <div className={classes.rectangle16}></div>
        <div className={classes.rectangle17}></div>
        <div className={classes.rectangle18}></div>
        <div className={classes.rectangle19}></div>
        <div className={classes.rectangle20}></div>
        <div className={classes.rectangle21}></div>
        <div className={classes.rectangle22}></div>
        <div className={classes.rectangle23}></div>
        <div className={classes.rectangle24}></div>
        <div className={classes.footer}>Footer</div>
      </div>
    </div>
  );
});

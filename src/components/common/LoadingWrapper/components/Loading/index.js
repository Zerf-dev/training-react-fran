import cn from 'classnames';
import Lottie from 'lottie-react';

import { getOptions } from './constants';

function Loading({ className, lottieStyle, loadingChildren: Children, type, loop, autoplay }) {
  return (
    <div className={cn('flex h-full w-full flex-col items-center justify-center ', className)}>
      <Lottie style={lottieStyle} {...getOptions({ type, loop, autoplay })} />
      <Children />
    </div>
  );
}

export default Loading;

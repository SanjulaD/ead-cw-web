import React, { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  exceptionRef?: React.RefObject<HTMLElement>;
  onClick: () => void;
  className?: string;
}

const ClickOutside: React.FC<Props> = ({
  children,
  exceptionRef,
  onClick,
  className,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickListener = (event: MouseEvent) => {
      let clickedInside = false;

      if (wrapperRef.current?.contains(event.target as Node)) {
        clickedInside = true;
      }

      if (exceptionRef?.current?.contains(event.target as Node)) {
        clickedInside = true;
      }

      if (!clickedInside) {
        onClick();
      }
    };

    document.addEventListener('mousedown', handleClickListener);

    return () => {
      document.removeEventListener('mousedown', handleClickListener);
    };
  }, [exceptionRef, onClick]);

  return (
    <div ref={wrapperRef} className={className ?? ''}>
      {children}
    </div>
  );
};

export default ClickOutside;

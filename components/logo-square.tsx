import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center',
        {
          'h-[75px] w-[80px] ': !size,
          'h-[75px] w-[70px] ': size === 'sm'
        }
      )}
    >
      <LogoIcon
        className={clsx({
          'h-[70px] ': !size,
          'h-[35px] ': size === 'sm'
        })}
      />
    </div>
  );
}

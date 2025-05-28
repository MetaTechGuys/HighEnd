import { PropsWithChildren } from 'react';

export default function SandboxLayout({ children }: PropsWithChildren) {
  return (
    <div className="size-screen flex min-h-screen items-center justify-center select-none">
      {children}
    </div>
  );
}

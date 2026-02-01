import { HTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  href?: string;
  hoverable?: boolean;
}

const variantStyles = {
  default: 'bg-white dark:bg-[var(--neutral-800)]',
  elevated:
    'bg-white dark:bg-[var(--neutral-800)] shadow-lg hover:shadow-xl transition-shadow',
  outlined:
    'bg-white dark:bg-[var(--neutral-800)] border border-[var(--neutral-200)] dark:border-[var(--neutral-700)]',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      href,
      hoverable = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      rounded-xl p-6
      ${variantStyles[variant]}
      ${hoverable ? 'hover:scale-[1.02] transition-transform cursor-pointer' : ''}
      ${className}
    `;

    if (href) {
      return (
        <Link href={href} className={baseStyles}>
          <div ref={ref} {...props}>
            {children}
          </div>
        </Link>
      );
    }

    return (
      <div ref={ref} className={baseStyles} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`mb-4 ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = 'h3', className = '', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={`text-xl font-semibold text-[var(--neutral-900)] dark:text-[var(--neutral-100)] ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

CardTitle.displayName = 'CardTitle';

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`text-[var(--neutral-600)] dark:text-[var(--neutral-400)] ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

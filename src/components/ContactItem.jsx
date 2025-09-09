export default function ContactItem({ href, icon, title, subtitle, external = true }) {
  const Wrapper = external ? 'a' : 'div';
  const wrapperProps = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 px-5 py-4
                 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700
                 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
    >
      {/* 👇 limpio, solo el icono */}
      <span className="mt-0.5 inline-flex items-center justify-center">
        {icon}
      </span>

      <div>
        <p className="font-semibold leading-6">{title}</p>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
    </Wrapper>
  );
}

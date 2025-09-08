export default function ContactItem({ href, icon, title, subtitle, external = true }) {
  const Wrapper = external ? 'a' : 'div';
  const wrapperProps = external
    ? { href, target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 px-5 py-4
                 bg-white dark:bg-transparent hover:border-gray-300 dark:hover:border-gray-700"
    >
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg
                       bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
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

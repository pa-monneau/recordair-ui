type ClassValue = string | false | null | undefined;

const classNames = (...values: ClassValue[]): string => values.filter(Boolean).join(" ");

export { classNames };

export const PHONE_PRIMARY = "415-769-7914";
export const PHONE_ALT = "612-459-7673";

const digitsOnly = (value: string) => value.replace(/[^\d+]/g, "");

export const telHref = (phone: string = PHONE_PRIMARY) => `tel:+1${digitsOnly(phone)}`;
export const smsHref = (phone: string = PHONE_PRIMARY, body?: string) =>
  `sms:+1${digitsOnly(phone)}${body ? `?&body=${encodeURIComponent(body)}` : ""}`;

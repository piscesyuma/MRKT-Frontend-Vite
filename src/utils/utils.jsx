import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const LoadingSkeleton = ({ width = "100%", height = "100%", circle = false, className = "" }) => {
  return (
    <Skeleton baseColor="#474747" highlightColor="#636363" width={width} height={height} circle={circle} className={`opacity-60 max-w-[186px] ${className}`} style={{ lineHeight: 'unset' }} />
  );
}

export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export function fromWei(amount, decimal = 6) {
  if (typeof amount === 'string') {
    amount = Number(amount)
  }
  amount = amount / (10 ** decimal)
  return isNaN(amount) ? 0 : amount
}

export function toWei(amount, decimal = 6) {
  if (typeof amount === 'string') {
    amount = Number(amount)
  }
  amount = amount * 10 ** decimal
  return isNaN(amount) ? '0' : String(amount).split('.')[0];
}

export function float2int(value) {
  return parseInt(value.toFixed(0));
}

export function parseDecimalFloat(value, count = 3) {
  return parseFloat(value.toFixed(count));
}

export const numberWithCommas = (x, digits = 3) => {
  if (isEmpty(x)) return '0';
  return Number(x).toLocaleString(undefined, { maximumFractionDigits: digits });
}

export const parseNumber = (n, digits = 3) => {
  if (isNaN(n)) return 0;
  return parseInt((n * 10 ** digits).toString()) / 10 ** digits;
}

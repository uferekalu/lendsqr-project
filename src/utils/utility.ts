export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export function dateConversion(data: string) {
  const dateObj = new Date(data);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const month = monthNames[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  const hour = 10;
  const minute = 0;
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

  const formattedDateStr = `${month} ${day}, ${year} ${formattedHour}:${minute
    .toString()
    .padStart(2, '0')} ${ampm}`;

  return formattedDateStr;
}

export function formatDate(date: Date) {
  const parsedDate = new Date(date);

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const day = String(parsedDate.getDate()).padStart(2, '0');

  const formattedDateStr = `${year}-${month}-${day}`;
  return formattedDateStr;
}

export interface Option {
  value: string;
  label: string;
}

export const organizations = [
  {
    value: 'Lendsqr',
    label: 'Lendsqr',
  },
  {
    value: 'Irorun',
    label: 'Irorun',
  },
  {
    value: 'Lushak',
    label: 'Lushak',
  },
  {
    value: 'Emcon',
    label: 'Emcon',
  },
];

export const statuses = ['inactive', 'active', 'pending', 'blacklisted'];

export const numRange = [100, 200, 300, 400, 500];

export function formatNumberWithCommas(number: number) {
  return number.toLocaleString('en-US');
}

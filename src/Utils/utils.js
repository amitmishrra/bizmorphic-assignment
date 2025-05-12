/**
 * Validates if the given email is in correct format.
 * @param {string} email
 * @returns {boolean}
 */
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validates if the given phone number is valid (7 to 15 digits, allows symbols).
 * @param {string} phone
 * @returns {boolean}
 */
const isValidPhone = (phone) => {
  const regex = /^[0-9\-+\s()]{7,15}$/;
  return regex.test(phone);
};

/**
 * Validates if the given string is a valid website URL.
 * @param {string} url
 * @returns {boolean}
 */
const isValidWebsite = (url) => {
  const regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
  return regex.test(url);
};

/**
 * Exports an array of objects to a CSV file.
 * @param {Object[]} data - Array of data rows
 * @param {string} [filename='data.csv'] - File name for download
 */
const exportToCSV = (data = [], filename = 'data.csv') => {
  if (!data?.length) return;

  const headers = Object.keys(data[0]);
  const csvRows = [
    headers.join(','), // CSV headers
    ...data.map(row =>
      headers
        .map(field => {
          const value = row[field];
          if (value == null) return '';
          return `"${String(value).replace(/"/g, '""')}"`; // Escape double quotes
        })
        .join(',')
    ),
  ];

  const csvContent = csvRows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export {isValidEmail, isValidPhone, isValidWebsite, exportToCSV}
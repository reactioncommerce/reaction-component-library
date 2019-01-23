/**
 *
 * @method addressToString
 * @summary Converts an `address` object to a string
 * @param {Object} address - Address object to be converted
 * @param {Object} [options] - Options that affect the resulting string
 * @param {Boolean} [options.includeFullName] - If true, the string will begin with address.fullName.
 * @return {String} - address as a flat string
 */
export default function addressToString({
  address1,
  address2,
  city,
  country,
  fullName,
  postal,
  region
}, options = {}) {
  const result = `${address1}${address2 ? `, ${address2}` : ""}, ${city}, ${region} ${postal} ${country}`;

  if (options.includeFullName && fullName) {
    return `${fullName}, ${result}`;
  }

  return result;
}

/**
 *
 * @method addressToString
 * @summary Converts an `address` object to a string
 * @param {Object} address - Address object to be converted
 * @return {String} - address as a flat string
 */
export default function addressToString({ address1, address2, city, country, postal, region }) {
  return `${address1}${address2 ? `, ${address2}` : ""}, ${city}, ${region} ${postal} ${country}`;
}

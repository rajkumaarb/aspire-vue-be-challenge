const nanoId = require('nanoid');
const INPUT_STRING_OPTION = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const customerFunction = nanoId.customAlphabet(INPUT_STRING_OPTION, 8);
const productFunction = nanoId.customAlphabet(INPUT_STRING_OPTION, 5);
const orderFunction = nanoId.customAlphabet(INPUT_STRING_OPTION, 10);

const customerUniqueCode = () => customerFunction();
const productUniqueCode = () => productFunction();
const orderUniqueCode = () => orderFunction();

module.exports = {
  customerUniqueCode,
  productUniqueCode,
  orderUniqueCode
};
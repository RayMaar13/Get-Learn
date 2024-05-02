function convertCurrency(amount) {
  try {
    // Menggunakan metode toLocaleString() untuk memformat angka ke dalam format mata uang Indonesia
    const formattedAmount = amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formattedAmount;
  } catch (error) {
    return `Error: ${error}`;
  }
}
export default convertCurrency;

export function convertToInternationalFormat(phoneNumber) {
  // Hilangkan karakter-karakter yang tidak diperlukan (misalnya: spasi, tanda hubung)
  phoneNumber = phoneNumber.replace(/[\s\-]/g, "");

  // Periksa apakah nomor telepon dimulai dengan "0"
  if (phoneNumber.startsWith("0")) {
    // Hapus "0" pertama dan tambahkan kode negara
    phoneNumber =
      "+62 " +
      phoneNumber.slice(1, 5) +
      "-" +
      phoneNumber.slice(5, 9) +
      "-" +
      phoneNumber.slice(9);
  } else {
    // Jika tidak dimulai dengan "0", anggapkan bahwa sudah dalam format internasional
    phoneNumber = "+" + phoneNumber;
  }

  return phoneNumber;
}

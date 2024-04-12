export function FormatNumber(number) {
	const numberString = number.toString();
	// Tách phần nguyên và phần thập phân
	const parts = numberString.split('.');
	const integerPart = parts[0];
	// Thêm dấu chấm vào phần nguyên
	const formattedString = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	// Kết hợp phần nguyên và phần thập phân (nếu có)
	return formattedString;
}

export function ScrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

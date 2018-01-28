import pyqrcode


class GenerateQR:

	@staticmethod
	def create(url):
		new_qr = pyqrcode.create(url)
		return 'data:image/png;base64,' + new_qr.png_as_base64_str(scale=6)

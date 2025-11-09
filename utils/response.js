class ApiResponse {
  static success(res, data, message = 'Success', statusCode = 200) {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  static error(res, message = 'Internal Server Error', statusCode = 500) {
    res.status(statusCode).json({
      success: false,
      error: {
        message,
      },
    });
  }

  static notFound(res, message = 'Not Found') {
    this.error(res, message, 404);
  }
}

module.exports = ApiResponse;

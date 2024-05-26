class baseController {
  sendResponse(result, message, code = 200) {
    var response = {
      success: true,
      code: code,
      data: result,
      message: message,
    };
    return response;
  }

  sendError(error, code = 404) {
    var response = {
      code: code,
      success: false,
      message: error,
    };
    return response;
  }
}

const data = new baseController();

module.exports = data;

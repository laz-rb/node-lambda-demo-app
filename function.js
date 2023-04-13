exports.handler = async (event) => {
  let responseMessage = 'Hello, Sir!';

  const response = {
      statusCode: 200,
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          message: responseMessage
      }),
  };

  return response;
};

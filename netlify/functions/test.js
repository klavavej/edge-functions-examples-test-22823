module.exports.handler = awslambda.streamifyResponse(
  async (event, responseStream, context) => {
    const httpResponseMetadata = {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
        "X-Custom-Header": "Example-Custom-Header",
      },
    };

    responseStream = awslambda.HttpResponseStream.from(
      responseStream,
      httpResponseMetadata
    );
    await new Promise((r) => setTimeout(r, 10));
    responseStream.write("<html>");
    responseStream.write("<p>First write!</p>");

    responseStream.write("<h1>Streaming h1</h1>");
    await new Promise((r) => setTimeout(r, 1000));
    responseStream.write("<h2>Streaming h2</h2>");
    await new Promise((r) => setTimeout(r, 1000));
    responseStream.write("<h3>Streaming h3</h3>");

    responseStream.write("<p>DONE!</p>");
    responseStream.end();
  }
);

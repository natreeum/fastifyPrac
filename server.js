const fastify = require('fastify')({ logger: true });

fastify.get('/', async (req, res) => {
  return res.status(200).send('hello, fastify');
});

fastify.get('/unauthorized', async (req, res) => {
  return res.status(401).send('Unauthorized');
});

fastify.get('/badrequest', async (req, res) => {
  return res.status(400).send('Bad Request');
});

fastify.post('/', async (req, res) => {
  const body = req.body;
  if (Object.keys(body).length != 1 || !body.message)
    return res.status(400).send('Bad Request');
  return res.status(200).send({ 'Your message': body.message });
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (e) {
    fastify.log.error(e);
    process.exit(1);
  }
};

start();

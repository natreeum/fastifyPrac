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
  if (Object.keys(body).length == 0) return res.status(400).send('Bad Request');
  return res.status(200).send({ body });
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

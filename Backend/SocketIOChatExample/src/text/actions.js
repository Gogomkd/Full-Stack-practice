import hat from 'hat';
import models from '../models/index'
import io from 'socket.io'


const Text = models.Text;

const getModels = async (req, res, next) => {
    const results: Array = await Text.findAll();
    res.status(200).send(results);

  await next;
}


import { Router, Request, Response } from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import * as myConfig from 'config';
import { mongodb } from './helpers/mongodb';

let config: any = myConfig.get('Config');

const router: Router = Router();

router.get('/api/reviews', (req: Request, res: Response) => {
    mongodb.collection("reviews").find().toArray().then((data) => {
        res.json(data);
    });
});

router.post('/api/reviews', (req: Request, res: Response) => {
    let data = req.body;
    mongodb.collection("reviews").insertOne(data).then((data) => {
        res.json(data);
    });
});

router.put('/api/reviews/:id', (req: Request, res: Response) => {
    let id = new ObjectID(req.params.id);
    let data = req.body;
    mongodb.collection("reviews").updateOne({ _id: id }, data).then((data) => {
        res.json(data);
    });
});

router.delete('/api/reviews/:id', (req: Request, res: Response) => {
    let id = new ObjectID(req.params.id);
    mongodb.collection("reviews").deleteOne({ _id: id }).then((data) => {
        res.json(data);
    });
});

router.post('/api/reviews/search', (req: Request, res: Response) => {
    let data = req.body;
    
});

export const ContactController: Router = router;
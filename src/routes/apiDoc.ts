import { Response, Router } from 'express';

const router = Router();

router.get('/', (_, res: Response) => {
  res.send({
    rootURL:
      'http://restaurantmanagementapi-env.eba-eujhhwnw.ap-south-1.elasticbeanstalk.com/api',
    endpoints: {
      '/user': {
        method: 'GET',
        description: 'Get all users',
        POST: {
          allowed: true,
          body: {
            name: 'string (required)',
            password: 'string (required)',
            role: 'string array (required)',
          },
        },
      },
      '/auth/login': {
        method: 'POST',
        description: 'Login user',
        body: {
          name: 'String',
          password: 'String',
        },
      },
    },
  });
});

export { router as apiDocRouter };

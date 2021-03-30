import {getFiles} from '../controllers/backendController';

const routes = (app) => {
    app.route('/file')
        .get((req, res, next) => {
            console.log('request from : ' + req.originalUrl)
            console.log('request type : ' + req.method)
            next();
        }, getFiles)

}

export default routes;
import { Response } from "express";
import logger from '../../logger';


// TODO: we need a list of the input options 


interface IValidationData {
    inputs: any;
    schema: any;
}

export async function validateRequest(data: IValidationData) {
    logger.trace('validating request...')
    try {
        const { schema, inputs } = data;

        await schema.validateAsync(inputs); // this will throw an error if the schema is not valid

        logger.trace('the request is valid!');

        return true;

    } catch (err: any) {
        logger.warn('the request is not valid');
        const obj = {
            message: err.message,
            _original: err._original
        }
        logger.error(obj);
        return false;
    }
};


export function handleValidationResult(res: Response) {
    // logger.trace('handleValidationResult...');
    try {

        return res.status(400).send('Bad request');

    } catch (err: any) {
        logger.warn('the request is not valid');
        logger.debug(err.message);
        return false;
    }
};
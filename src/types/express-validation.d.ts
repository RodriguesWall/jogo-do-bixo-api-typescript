declare module "express-validation" {
    import { Request, Response, NextFunction } from 'express'
    export function validate(
        schema: any,
        options?: any
    ):(
        req: Request,
        res: Response,
        next: NextFunction
    ) => void;
}
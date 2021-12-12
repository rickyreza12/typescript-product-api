import {Request, Response} from 'express'
import { CreateProductInput, deleteProductSchema, UpdateProductInput } from '../schema/product.schema';
import { createProduct, deleteProduct, findAllProduct, findAndUpdateProduct, findProduct } from '../services/product.service';

export async function createProductHandler(req: Request<{}, {}, CreateProductInput["body"]>, res: Response)
{
    const userId = res.locals.user._id;

    const body = req.body

    const product = await createProduct({
    ...body, user: userId
});

    return res.send(product);
}
export async function updateProductHandler(req: Request<UpdateProductInput["params"]>, res: Response)
{
    const userId = res.locals.user._id;

    const productId = req.params.productId;

    const update = req.body;

    const product = await findProduct({productId})

    if(!product)
    {
        return res.sendStatus(404)
    }

    if(String(product.user) !== userId)
    {
        return res.sendStatus(403)
    }

    const updatedProduct = await findAndUpdateProduct({productId}, update, {new: true});

    return res.status(200).send(updatedProduct)
}

export async function getProductHandler(req: Request<UpdateProductInput["params"]>, res: Response)
{
    const productId = req.params.productId;

    const product = await findProduct({productId});

    if(!product)
    {
        return res.sendStatus(404)
    }

    return res.send(product);

}

export async function getAllProductHandler(req: Request<UpdateProductInput["params"]>, res: Response)
{

    const products = await findAllProduct();

    if(!products)
    {
        return res.sendStatus(404)
    }

    return res.status(200).send(products);
}
export async function deleteProductHandler(req: Request<UpdateProductInput["params"]>, res: Response)
{
    const userId = res.locals.user._id;

    const productId = req.params.productId;

    const product = await findProduct({productId})

    if(!product)
    {
        return res.sendStatus(404)
    }

    if(String(product.user) !== userId)
    {
        return res.sendStatus(403)
    }

    const updatedProduct = await deleteProduct({productId});

    return res.send(updatedProduct)
}
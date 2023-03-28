import { NextApiRequest, NextApiResponse } from "next"
import { students } from "./db";

const handler = async (req : NextApiRequest,res : NextApiResponse) => {

    if(req.method != "GET"){
        res.status(405).json({error:'metodo no soportado'})
        return;
    }
    res.status(200).json(students)

}

export default handler


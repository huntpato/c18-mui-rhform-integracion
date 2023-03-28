import { NextApiRequest, NextApiResponse } from "next"
import { students } from "./db";

interface Student {
    id: string,
    nombre: string,
    curso: string,
    calificaciones:{
        PrimerCuatr: string,
        SegundoCuatr: string
    }
    email?: string
}

const handler = async (req : NextApiRequest,res : NextApiResponse) => {

    if(req.method == "POST"){

        const { nombre, curso, primerCuatri, segundoCuatri, email } = req.body;

        const newStudent: Student = {
            id: (students.length + 1).toString(),
            nombre: nombre,
            curso: curso,
            calificaciones: {
                PrimerCuatr: primerCuatri,
                SegundoCuatr: segundoCuatri
            }
        }

        students.push(newStudent)
        res.status(200).json({ message: 'estudiante agregado', newStudent })
    }
}

export default handler
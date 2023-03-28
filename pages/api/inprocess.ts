import { NextApiRequest, NextApiResponse } from 'next';
import { students } from './db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const filteredStudents = students.filter((student) =>  +student.calificaciones.PrimerCuatr < 6 || +student.calificaciones.SegundoCuatr < 6);

  res.status(200).json(filteredStudents);
};

export default handler;

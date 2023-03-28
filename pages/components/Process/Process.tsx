import React, { useEffect, useState } from 'react'
import { Student } from '../../api/create'

const Process = () => {

    const [students,setStudents] = useState<Student[]>()

    const fetchInfo =  async()=>{
        const response = await fetch("https://c18-delta.vercel.app/api/inprocess");
        const data = await response.json();
        setStudents(data)
    };

    useEffect(()=>{
        fetchInfo();
    },[])

  return (
    <div className='container-students'>
    {students?.map(student=>(
        <div key={student.id} className="container-student">
            <h5>{student.nombre}</h5>
            <div>
                <p>primer cuatri: {student.calificaciones.PrimerCuatr}</p>
                <p>segundo cuatri: {student.calificaciones.SegundoCuatr}</p>
            </div>
        </div>
    ))}
</div>
  )
}

export default Process
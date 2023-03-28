import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Typography, Box, Button } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Student } from '../../api/create';

// const loginSchema = yup
//   .object({
//     name: yup
//       .string()
//       .required('Please, the field name is required')
//       .min(2, 'Please, the field name should have at least 2 chars'),
//     course: yup
//       .string()
//       .required('Please, the field course is required')
//       .min(2, 'Please, the field course should have at least 2 chars'),
//     email: yup
//       .string()
//       .required('Please, the field email is required')
//       .email('Invalid mail'),
//     firstQuarter: yup
//       .number()
//       .required('Please, the field firstQuarter is required'),
//     secondQuarter: yup
//       .number()
//       .required('Please, the field firstQuarter is required'),
//   })
//   .required();


export const CreatStudent: React.FC = () => {
    const { register, handleSubmit, formState: {errors}, getValues } = useForm();

  const onSubmit = async () => {

    //getValues para obtener todos los datos y hacer el post
    const values = getValues();

   await fetch("http://localhost:3000/api/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .catch(error => {
        console.log(error)
      });
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" {...register("nombre", {required: true})}/>
        {errors.nombre && errors.nombre.type === "required" && (
          <span>Este campo es requerido</span>
        )}
      </div>
      <div>
        <label htmlFor="curso">Curso:</label>
        <input
        type="text" {...register("curso", {required: true})}
        />
        {errors.curso && errors.curso.type === "required" && (
          <span>Este campo es requerido</span>
        )}
      </div>
      <div>
        <label htmlFor="primerCuatri">Calificaciones:</label>
        <input
              id='primerCuatri'   type="text" {...register("primerCuatri", {required: true})}
        />

      </div>
      
      <div>
        <label htmlFor="segundoCuatri">Calificaciones:</label>
        <input
              id='segundoCuatri'   type="text" {...register("segundoCuatri", {required: true})}
        />
      </div>
      <button type="submit">Agregar Estudiante</button>
    </form>
    )
};

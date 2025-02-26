import express from 'express';
import { editCourse, getAllCourses, getSingleCourse, uploadCourse, getCourseByUser, addQuestion } from '../controllers/course.controller';
import { authorizeRoles, isAuthenticated } from '../middleware/auth';

const courseRouter = express.Router();

// Ruta para crear un curso (solo accesible para administradores)
courseRouter.post(
    '/create-course', 
    isAuthenticated, // Verifica si el usuario está autenticado
    authorizeRoles('admin'), // Restringe el acceso solo a administradores
    uploadCourse // Controlador que maneja la creación del curso
);

// Ruta para editar un curso por ID (solo accesible para administradores)
courseRouter.put(
    '/edit-course/:id', 
    isAuthenticated, // Verifica si el usuario está autenticado
    authorizeRoles('admin'), // Restringe el acceso solo a administradores
    editCourse // Controlador que maneja la edición de cursos
);

// Ruta para obtener los datos de un curso por ID
courseRouter.get(
    '/get-course/:id',
    getSingleCourse // Controlador que obtiene los datos de un curso específico
);

// Ruta para obtener la lista de todos los cursos disponibles
courseRouter.get(
    '/get-courses',
    getAllCourses // Controlador que obtiene todos los cursos excluyendo datos restringidos
);

// Ruta para obtener el contenido del curso por ID (solo accesible para usuarios autenticados)
courseRouter.get(
    '/get-course-content/:id',
    isAuthenticated,  // Middleware que verifica si el usuario está autenticado
    getCourseByUser   // Controlador que obtiene el contenido del curso por ID
);

// Ruta para añadir una pregunta a un contenido dentro de un curso
courseRouter.put(
    '/add-question',
    isAuthenticated,  // Middleware que verifica si el usuario está autenticado
    addQuestion       // Controlador que maneja la adición de preguntas
);

export default courseRouter;

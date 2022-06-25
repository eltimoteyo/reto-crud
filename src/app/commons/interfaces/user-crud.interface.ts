export interface IUserCrud {
  id?: number;
  nombre: string;
  apellidos: string;
  avatar: string;
  email: string;
  teleefono: number;
}
export interface IAlumno {
  alumnoId?: string;
  nombre: string;
  apellidos: string;
  fechaNacimiento: string;
  sexo: string;
}

export interface ICurso {
  cursoId?: string;
  nombre: string;
  descripcion: string;
  obligatorio: boolean;
}

export interface INotas {
  notasId: string;
  curso: ICurso;
  alumno: IAlumno;
  prtacticas: string;
  parcial: string;
  final: string;
  promedio: string;
}

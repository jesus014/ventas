//creacion de estructura de respuesta para la solicitud de la peticion http
export interface Response {
  exito: number;
  mensaje: string,
  data: any;
}

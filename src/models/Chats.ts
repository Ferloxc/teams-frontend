export interface userInfo {
    id: number,
    nombre: string,
    contrasena: string,
    status: string,
    imagen: string,
    conversaciones: [
        {
            idConversacion: number,
            idDestinatario: number,
            idGrupo: number,
            tipo: string,
            ultimoMensaje: string,
            horaUltimoMensaje: string,
            nombreDestinatario: string,
            imagenDestinatario: string
        }

    ]
}
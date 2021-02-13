'use strict';

module.exports = {
    // Server Messages
    SuccessConnectionToDB: 'Connected to DB',
    ServerSuccessStatus: 'Server running',
    ServerErrorMessage: 'Error de servidor',

    // GET petitions messages
    GetPetitionsErrorMessage: 'No se pudo solicitar',
    GetPetitionsSuccessMessage: 'Solicitado con éxito',

    // GETBYID petitions messages
    GetByIdPetitionsErrorMessage: 'Registro no encontrado',
    GetByIdPetitionsSuccessMessage: 'Encontrado con éxito',

    // POST petitions messages
    PostPetitionsErrorMessage: 'No se pudo guardar',
    PostPetitionsSuccessMessage: 'Guardado con éxito',

    // PUT petitions messages
    PutPetitionsErrorMessage: 'No se pudo actualizar',
    PutPetitionsSuccessMessage: 'Actualizado con éxito',

    // DELETE petitions messages
    DeletePetitionsErrorMessage: 'No se pudo eliminar',
    DeletePetitionsSuccessMessage: 'Eliminado con éxito',

    // Sockets messages
    SocketErrorMessage: 'Algo salió mal',
    AccessDeniedMessage: 'Acceso denegado',
    AccessGrantedMessage: 'Acceso autorizado',
    NoTokenReceivedMessage: 'No se recibió el token',
    InvalidTokenMessage: 'Token no válido',
    NoUserFoundMessage: 'No se encontró el usuario',
    TokenGeneratedMessage: 'Token generado con éxito',
    SaveUserErrorMessage: 'Error al guardar usuario',
    TokenExpirationTimeMessage: '3 días',
    UpdateUserErrorMessage: 'No se pudo actualizar el usuario',
    TokenExpiredErrorMessage: 'Token expirado'
};

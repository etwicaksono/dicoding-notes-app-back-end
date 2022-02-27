const {
   addNoteHandler,
   getAllNotesHandler,
   getNoteByIdHandler,
   editNoteByIdHandler,
   deletNoteByIdHandler
} = require("./handler")

const routes = [{
      method: 'GET',
      path: '/',
      handler: (request, h) => {
         return "Notes App Backend"
      },
   },
   {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
   },
   {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
   },
   {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
   },
   {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
   },
   {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deletNoteByIdHandler,
   },
]

module.exports = routes
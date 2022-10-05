import { Todo } from './todo.class';

export class TodoList {
    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id )
        //devuelve la lista qe es diferente el ID y sin el qe elimine, volviendo al mismoarreglo
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) { 
        for( const todo of this.todos ) {
            if( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {   
        this.todos = this.todos.filter( todo => !todo.completado )
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify( this.todos ) );   
    }
    cargarLocalStorage(){
        this.todos = ( localStorage.getItem('todo') )
                        ? JSON.parse( localStorage.getItem('todo') )
                        : [];       
        this.todos = this.todos.map( Todo.fromJson );
                    //this.todos.map( obj => Todo.fromJson(obj))
    }
}
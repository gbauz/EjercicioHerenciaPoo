class Persona{
    /**ATRIBUTOS DE LA CLASE PERSONA */
     nombre:String;
     edad:number;
     /**NOTA: CUANDO YO CREO UNA CLASE
      * EN TYPESCRIPT DEBO CREAR EL CONSTRUCTOR
      * EL CONSTRUCTOR DEBE TENER  COMO PARAMETRO LOS 
      * ATRIBUTOS DE LA CLASE Y EL METODO THIS
      */
     constructor(nombre:String,edad:number){
        this.nombre=nombre;
        this.edad=edad;
     }
     /**METODO SALUDAR */
     saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
     }
    }
    /**DEFINO EL OBJETO DE LA CLASE */
   /* const ejercicio1= new Persona('Giovanni',24);
    ejercicio1.saludar()
    */
    class Medico extends Persona{
      especialidad:String;

      constructor(nombre:String,edad:number,especialidad:String){
        super(nombre,edad);
        this.especialidad=especialidad;
      }
      atenderPacientes():void{
        console.log("El medico puede atender pacientes");
      }
      recetarMedicamentos():void{
        console.log("El medico puede recetar medicamentos");
      }
    }

    /**Agrego el objeto */
    const doctor=new Medico("Jose Ramirez",52,"pediatra");

    doctor.atenderPacientes();
    doctor.recetarMedicamentos();
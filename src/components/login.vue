<template>
  <div class="container-fluid">
          <p class="label col-form-label-lg text-capitalize text-center">{{ msg }}</p>

  <div class="row ">

    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm ">
 
        <div v-for="(data,index) in todo" :key="index"  >
           <div v-if="todo.length+1 >= 1" >
              <div  v-if="data.priority == 1" class="alert alert-success small animated fadeInDown float-none " role="alert">
                Your appontment for today is {{data.todo}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
                <div  v-else-if="data.priority == 2 " class="alert alert-primary small animated fadeInDown float-none " role="alert">
                Your appontment for today is {{data.todo}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
          </div>
          <p  v-else>Yo don't have anythings to do , Enjoy It :)</p>
        </div>


    <div class="container-fluid no-gutters " >
        <!-- {{name}}</br> -->
        <!-- {{btnstate ? 'the button is disabled' : 'the button is acive'}} </br> -->
        <div class="list-group list-group-item-light no-gutters p-0 m-0"   >
          <a id="lstItems" class="list-group-item list-group-item-action " v-for="(data,index) in todo" :key="index">
           <label class="mt-2">{{data.todo}} </label>  
              <button id="btn_delete"  data-toggle="modal" data-target="#exampleModal"  class=" float-right btn btn-primary rounded-circle btn-light btn-sm  btn-outline-danger m-1">
               <i class="far fa-trash-alt" data-toggle="modal" data-target="#exampleModal"></i>
              </button>
          </a>
        </div>
        
    <div class="modal animated slideInUp faster bd-example-modal-sm small " id="exampleModal" tabindex="-1" role="dialog"  aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary  ">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    </div>
    </div>
   
  </div>
 

  </div>
</template>



<script>
export default {
  name: "login",
  props: {
    msg: String
  },

  data() {
    return {
      name: "Dheo",
      btnstate: true,
      todo: [
        { todo: "Planning Tutorial", priority: 1 },
        { todo: "scirpting", priority: 2 }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
#btn_delete {
  cursor: pointer;
  box-shadow: 2px 3px 3px rgba(37, 37, 37, 0.2);
  transition: 0.2s ease-in-out;
}
#btn_delete:hover {
  transform: scale(1.2);
}
input {
  size: 96%;
  border-color: rgba(12, 12, 12, 0);
}
</style>

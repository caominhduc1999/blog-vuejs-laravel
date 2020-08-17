<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">List Category</h3>

                        <div class="card-tools">
                            <router-link to="add-category" >
                                <button class="btn btn-primary">
                                    Add Category
                                </button>
                            </router-link>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0" style="height: 300px;">
                        <table class="table table-head-fixed text-nowrap">
                            <thead>
                            <tr>
                                <th>
                                    <select name="" id="" @change="DeleteSelected">
                                        <option>Select</option>
                                        <option>Delete All</option>
                                    </select>
                                    <br/>
                                    <input type="checkbox" @click.prevent="selectAll" v-model="all_select">
                                    <span v-if="all_select == false">Check All</span>
                                    <span v-else>Uncheck All</span>
                                </th>

                                <th>#</th>
                                <th>Category Name</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(category, index) in getAllCategory" :key="category.id">
                                <td><input type="checkbox" v-model="categoryItem" :value="category.id"></td>
                                <td>{{index + 1}}</td>
                                <td>{{category.cat_name}}</td>
                                <td>{{category.created_at | timeformat}}</td>
                                <td>
                                    <router-link :to="`edit-category/${category.id}`">
                                        <button class="btn btn-warning"><i class="fa fa-edit">Edit</i></button>
                                    </router-link>
                                    <a href="" @click.prevent="deletecategory(category.id)"><button class="btn btn-danger"><i class="fa fa-trash">Delete</i></button></a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        data(){
            return {
                categoryItem : [],
                all_select: false
            }
        },
        mounted() {
            this.$store.dispatch("allCategory")
        },

        computed:{
            getAllCategory(){
                return this.$store.getters.getCategory
            }
        },

        methods:{
            deletecategory(id){
                axios.get('/category/'+id)
                    .then(() => {
                        this.$store.dispatch('allCategory')
                        Toast.fire({
                            icon: 'success',
                            title: 'Deleted successfully'
                        })
                    })
            },

            DeleteSelected(){
                axios.get('/deletecategory/'+this.categoryItem)
                    .then(()=>{
                        this.categoryItem = []
                        this.$store.dispatch("allCategory")
                        Toast.fire({
                            icon: 'success',
                            title: 'Deleted successfully'
                        })
                    })
            },

            selectAll(){
                if(this.all_select == false){
                    this.all_select = true;
                    for(var category in this.getAllCategory){
                        this.categoryItem.push(this.getAllCategory[category].id)
                    }
                }else{
                    this.all_select = false;
                    this.categoryItem = []
                }
            }
        }
    }
</script>

<style scoped>

</style>

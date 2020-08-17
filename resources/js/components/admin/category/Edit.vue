<template>
    <div>
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Quick Example</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form role="form" @submit.prevent="updateCategory()">
                <div class="card-body">
                    <div class="form-group">
                        <label>Category Name</label>
                        <input v-model="form.cat_name" type="text" name="cat_name" class="form-control" :class="{ 'is-invalid': form.errors.has('cat_name') }" placeholder="Enter name">
                        <has-error :form="form" field="cat_name"></has-error>
                    </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                    <button :disabled="form.busy" type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Edit",

        mounted() {
            axios.get(`/edit-category/${this.$route.params.categoryid}`)
                .then((response)=>{
                    this.form.fill(response.data.category)
                })
        },

        data(){
            return {
                form : new Form({
                    cat_name: ''
                })
            }
        },

        methods:{
            updateCategory(){
                this.form.post(`/update-category/${this.$route.params.categoryid}`)
                    .then(() => {
                        this.$router.push('/category-list')
                        Toast.fire({
                            icon: 'success',
                            title: 'Updated successfully'
                        })

                    })
                    .catch(() => {

                    })
            }
        }
    }
</script>

<style scoped>

</style>

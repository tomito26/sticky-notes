<template>
    <div class="modal" @submit.prevent="addNewNote">
        <form>
            <h2>Add Note</h2>
            <div class="closeModal">
                <font-awesome-icon icon="fa-xmark" class="closeBtn" @click="$emit('close-modal')"></font-awesome-icon>
            </div>
            <div class="form-group">
                <textarea name="note" id="note" placeholder="Add note here" v-model="newNote.note"></textarea>
            </div>
            <div class="required" v-if="inputIsInvalid">
                <p>This field is required</p>
            </div>
            <div class="form-group">
                <!-- <label for="date">Date Due</label> -->
                <input type="date" name="date" id="date" class="form-control" v-model="newNote.date">
            </div>
            <button class="btn">Add Note</button>
        </form>
    </div>
</template>

<script>
export default {
    emits: {
        'close-modal': function() {
            return true
        },
        'add-new-note': function(newNote) {
            if(newNote) {
                return true
            } else {
                return false
            }
        }
    },
    data() {
        return {
            newNote: {
                id: 0,
                note: "",
                date: ""
            },
            inputIsInvalid: false
        }
    },
    methods: {
        addNewNote(){
            if(this.newNote.note){
                const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`;
                this.newNote.background = color;
                this.newNote.date = this.newNote.date ? this.newNote.date : new Date().toISOString().substring(0,10);
                this.$emit('add-new-note',this.newNote);
            } else{
                this.inputIsInvalid = true
            }
        }
    }
}
</script>

<style scoped>
.modal{
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    
}
form{
    max-width: 600px;
    margin: 100px auto;
    width: 90%;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    position: relative;
}
.form-group{
    margin-top: 10px;
}

.form-group textarea{
    width: 550px;
    height: 100px;
    padding: 5px;
    font-size: 15px;
    font-family: inherit;
}
.required{
    background-color: #F7C8E0;
    width: 550px;
    padding: 10px;
    border-radius: 5px;
    margin: 5px 0 10px;
}
.required p {
    color: #D61355;
}
.form-group .form-control{
    width: 550px;
    padding: 5px;
    font-size: 15px;
    font-family: inherit;
    margin-bottom: 10px;
}
.btn{
    width: 550px;
    padding: 6px 12px;
    font-size: 14px;
    background-color: #379237;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
}
.btn:hover, .btn:active{
    background-color: #54B435;
}
.closeModal{
    position: absolute;
    top: 10px;
    right: 20px;
    color: #FF0032;
}
.closeBtn{
    cursor: pointer;
}


</style>
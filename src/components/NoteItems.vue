<template>
    <div class="container">
        <note-item 
            v-for="note in notes" 
            :key="note.id" 
            :id="note.id"
            :note="note.note"
            :date="note.date"
            :background-color="note.background"
            @delete-note="deleteNote"
        ></note-item>
    </div>
</template>

<script>
import NoteItem from './NoteItem.vue';
export default {
    components: {
        NoteItem
    },
    props: {
        notes: {
            type: Object,
            required: true
        }
    },
    emits: {
        'delete-note': function(id) {
            if(id) {
                return true
            } else {
                return false
            }
        }
    },

    methods: {
        deleteNote(noteId) {
            this.$emit('delete-note', noteId)
        }
    }
  
}
</script>

<style scoped>
.container{
    width: 700px;
    margin: 20px auto;
    display:  grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;    
    /* flex-wrap: wrap; */
}
</style>
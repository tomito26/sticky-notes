<template>
    <the-header  @show-modal="showModal"></the-header>
    <note-items :notes="notes" @delete-note="removeNote"></note-items>
    <note-form 
        v-if="displayModal" 
        @close-modal="closeModal"
        @add-new-note="addNote"
    ></note-form>
</template>

<script>
import NoteItems from './components/NoteItems.vue';
import NoteForm from './components/NoteForm.vue'
export default {
    components: {
        NoteItems,
        NoteForm
    },
    data() {
        return {
            notes: [],
            displayModal: false
        }
    },
    methods: {
        showModal() {
            this.displayModal = true
        },
        closeModal() {
            this.displayModal = false
        },
        addNote(newNote) {
            newNote.id = this.notes.length + 1;
            console.log(newNote)
            this.notes.unshift(newNote);
            this.displayModal = false
        },
        removeNote(noteId) {
            
            this.notes = this.notes.filter(note => note.id !== noteId);
        }
    }
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: "Lato", sans-serif;
}

</style>

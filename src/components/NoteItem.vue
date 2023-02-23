<template>
    <div class="wrapper" :style="{'background-color': backgroundColor }">
        <div class="closeBtn">
            <font-awesome-icon icon="fa-xmark" class="xmark" @click="$emit('delete-note', id)"></font-awesome-icon>
        </div>
        <p>{{ note }}</p>
       <footer>
        <p>{{ date }}</p>
       </footer>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            requred: true
        },
        note: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
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
    }
}
</script>

<style scoped>
.wrapper{
    width: 100%;
    height: 200px;
    background-color: #FED049;
    padding: 16px 5px 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.26);
}
.wrapper .closeBtn{
    position: absolute;
    top: 5px;
    right: 5px;
}
.wrapper .xmark{
    color: red;
    cursor: pointer;
}
footer p{
    font-size: 14px;
    font-style: italic;
}
</style>
<template>
    <header>
        <div class="logo">
            <h2>Note</h2>
        </div>
        <button @click="$emit('show-modal')">+</button>
    </header>
</template>

<script>
export default {
    emits: {
        'show-modal': function(){
            return true
        }
    }
}
</script>

<style scoped>
header{
    max-width: 700px;
    width: 90%;
    margin: 50px auto 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo h2{
    font-size: 30px;
    font-weight: 900;
}
header button{
    text-align: center;
    height: 35px;
    width: 35px;
    border-radius: 100%;
    border: none;
    background-color: #372948;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
}
</style>
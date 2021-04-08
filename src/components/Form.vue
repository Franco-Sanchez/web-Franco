<template>
    <form>
        <div class="form-field">
            <Label text="Correo electrónico" for="email" />
            <Input type="email" id="email" />
        </div>
        <div class="form-field">
            <Label text="Mensaje" for="message" />
            <Textarea id="message" />
        </div>
        <Button />
    </form>
</template>

<script>
import Label from '@/components/form/Label.vue'
import Input from '@/components/form/Input.vue'
import Textarea from '@/components/form/Textarea.vue'
import Button from '@/components/Button.vue'

export default {
    name:'Form',
    components: {
        Label,
        Input,
        Button,
        Textarea
    }
}
</script>

<style lang="scss" scoped>
form, .form-field {
    display: flex;
    flex-direction: column;
    row-gap: 11px;
}

form {
    max-width: 595px;
}

button {
    width: 100%;
}
</style>
<template>
    <Page class="page" :background="colors.darkgrey">
        <ActionBar class="action-bar">
            <dt-user-nav />
        </ActionBar>
        
        
        <StackLayout   class="dt-header"  :background="colors.grey"
        >
            <Image src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" stretch="aspectFit" />
                <Label class="dt-header-label" text="Digital Town" fontSize="20" fontWeight="bold" style="color: white" />
                <Label class="dt-header-label" :text="prettyAppName" style="color: white" />
        </StackLayout>

        

    </Page>
</template>

<script>

import * as ApplicationSettings from "application-settings";
export default {
    data () {
        return {
            appName: 'app-name',
            input: {
                firstname:'',
                lastname:''
            },  
            next: 'ChildA',
        }
    },
    computed: {
        prettyAppName: ({$store}) => $store.getters.prettyAppName
    },
    methods: {
        save() {
            this.$store.commit("save", this.input);
        },
        load() {
            this.$store.commit("load");
        },
        clear() {
            this.input.firstname = "";
            this.input.lastname = "";
        }
    }
}

</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    .dt-header {
       margin: 90vh 80px ;   
    }
    .dt-header-label {
        margin: 40px 80px 0
    }
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
